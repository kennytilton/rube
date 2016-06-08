(ns hello-mobile.core
  (:require
   [tiltontec.cell.base
    :refer [ia-type ia-types unbound cells-reset]
    :as cty]
   [tiltontec.cell.observer
    :refer-macros [fn-obs]
    :refer [observe]]
   [tiltontec.cell.integrity :refer-macros [with-integrity]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core
    :refer-macros [the-kids c?kids mdv!]
    :refer [md-get make md-reset! fm! fget qx-par] :as md]
   [tiltontec.qxia.types :refer [derive-tree]
    :as qxty]
   [tiltontec.qxia.base :refer [qxme qx-data-array]]
   [tiltontec.qxia.core
    :refer [label image button routing-get
            text-field number-field]]
   [tiltontec.qxia.macros
    :refer-macros [hbox vbox navigation-page form carousel
                    drawer collapsible group]]
   ))

(def this-app (atom nil))

(declare make-picker-test make-login make-overview)

(defn make-hhhack []
  (println :hello-make-family!!!!!!!!!!!!)
  (navigation-page ["HHHack" "/"][]
    (collapsible "Click for a surprise" []
      (label "Surprise."))))


(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (md/make ::qxty/Mobile
     :qx-me this
     :pager pager
     :shower shower
     :kids (c?kids
             ;;(make-hhhack)
             (make-login)
             (make-overview)
             ))))

(defn make-css-test []
  (hbox []
    (label "Hello cool222"
      :flex 0
      :css-class "cool")
    (vbox []
      (label "world 2!"
        :flex 3
        :css-class ["cool" "coolfont"])
      (label "world 3!"
        :flex 3
        :css-class ["cool" "coolfont"]))))

        
(defn make-login-form []
  (form [][:name :login]
    (text-field "Username"
      :name :u-name
      :value (c-in "KennY")
      :placeholder "Just type something"
      :required true
      :requiredInvalidMessage "Please share your user name")
    (md/make ::qxty/m.PasswordField
      :name :p-word
      :label "Password"
      ;;:value "Zoommmmm"
      :placeholder "Just type something"
      :required true
      :requiredInvalidMessage "Password is required")
    (number-field "A 42-ish Quantity"
      ;;:qx-new-args [42]

      :placeholder "something from -42 to 420 divisible by 42"
      :required true
      :minimum -42
      :step 42
      :maximum 420
      ;;:liveUpdate true
      :invalidMessage "NOT Answer to universe"
      :requiredInvalidMessage "Answer to universe is required")

    (md/make ::qxty/m.CheckBox
      :name :remember-me
      :label "Remember you?"
      :qx-new-args (c? [(md-get me :value)])
      :value (c-in false)
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})

    
    (md/make ::qxty/m.ToggleButton
      :name :really
      :label "Really?"
      :visibility (c? (if (mdv! :remember-me :value)
                        "visible" "excluded"))
      :value (c-in false)
      :qx-new-args (c? [(md-get me :value) "Yes" "Nahh"])
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})

      (md/make ::qxty/m.Slider
        :name :time-to-remember
        :label "How long to remember?"
        :displayValue "value"
        :value (c-in 10)
        :enabled (c? (and (mdv! :remember-me :value)
                       (mdv! :really :value)))
        :minimum 1 :maximum 30 :step 2
        :listeners  {"changeValue"
                     (fn [evt me]
                       (let [data (.getData evt)
                             jd (js->clj data)]
                         (md-reset! me :value jd)))})

      (text-field "Remember time"
        :value (c?+ [:obs (fn-obs
                            (when-let [q (qxme me)] ;; not at first
                              (.setValue (qxme me) new)))]
                 (let [r (mdv! :time-to-remember :value)]
                   (when r (str r " days"))))
        :readOnly true)

      (md/make ::qxty/m.SelectBox
        :label "How many?"
        :selection (c-in 2)
        :model (qx-data-array ["one" "two" "three"])
        :placeholder "Pick a number, any number"
        :listeners  {"changeSelection"
                     (fn [evt me]
                       (let [jd (js->clj (.getData evt))]
                         (with-integrity (:change)
                           (md-reset! me :selection (jd "index")))))})))

(defn make-login []
  (navigation-page ["Login" "/"][]
    (make-login-form)
    (button "Login"
      :listeners {"tap"
                  #(let [login (qxme (fm! :login me))
                         vmgr (.getValidationManager login)]
                     (assert vmgr)
                     (when-let [ok (.validate login)]
                       (routing-get "/overview")))})

    (make-picker-test)

    (carousel [:name :carousel
               :css-class "cool"]
      (group [:showBorder true]
        (label "one-a?") (label "one-b?") (label "one-c?"))
      (hbox [] (label "two"))
      (hbox [] (label "three")))
    #_(drawer "bottom" [:name :drawer :css-class "hot"]
        (hbox [] (label "socks"))
        (hbox [] (label "shirts")))

    (collapsible "Click for a surprise" []
      (label "Surprise."))

    
    (md/make ::qxty/m.TextArea
      :label "Tell me a story."
      :placeholder "Your story here."
      :maxLength 300
      :value (c-in nil)
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})
    ))

(defn make-picker-test []
  (vbox [:name :picker-vbox]
     (label (c? (let [myp (fget :my-pick me)]
                 (str "Latest pick " (md-get myp :value)))))
    (md/make ::qxty/m.Picker
      :name :my-pick
      :height 100
      :width 200
      :visibleItems 3
      :value (c-in "booya")
      :listeners {"changeSelection"
                  (fn [evt me]
                    (let [data (.getData evt)
                          jd (js->clj data)]
                      #_(println "picked!!!! jd" jd
                        (type jd) (ffirst jd)
                        (jd "item"))
                      (md-reset! me :value
                        (get (get jd "item") "title"))))}

      :slot-data (list
                   [{:title "Windows Phone"
                     :subtitle "R.I.P."
                     :image "identica/mmedia/games.png"}
                    {:title "iOS" :subtitle "Version 7.1"}
                    {:title "Android"}]
                   [{:title "Tablet"}
                    {:title "Smartphone"}
                    {:title "Phablet"}]))
    #_(label (c? (let [myp (fget :my-pick me  {:me? false
                          , :inside? false
                          , :up? true
                          , :wocd? true ;; without-c-dependency
                          })]
                 "xxx" #_
                 (str (md-get myp :value)))))))


(defn make-overview []
  (navigation-page ["Overview" "/overview"]
    [:name :oview
     :showButton true
     :buttonText (c? (if (md-get me :greet?)
                       "Who's there?"
                       "Knock-Knock"))
     :buttonIcon "identica/mmedia/games.png"
     :showBackButton true
     :backButtonText "Back"
     :listeners
     {"action" (fn [event me]
                  (md-reset! me :greet? (not (md-get me :greet?))))}
     :greet? (c-in false)
     ]
    (hbox [:name :stuff]
      (if (md-get (qx-par me) :greet?)
        (vbox [:css-class "cool"]
          (label "Hello")
          (label "World"))
        
        (image "identica/mmedia/earth-from-moon.jpg"
          ;;:rotation -5
          ;;:scaleX 0.5 :scaleY 0.5
          ;; warning: specifiying the above suppresses css
          :css-class "warning")))))
