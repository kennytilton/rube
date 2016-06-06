(ns hello-mobile.core
  (:require
   [tiltontec.cell.base
    :refer [ia-type ia-types unbound cells-reset]
    :as cty]
   [tiltontec.cell.observer :refer [observe]]
   [tiltontec.cell.integrity :refer-macros [with-integrity]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core
    :refer-macros [the-kids c?kids mdv!]
    :refer [md-get make md-reset! fm! fget qx-par] :as md]
   [tiltontec.qxia.types :refer [derive-tree]
    :as qxty]
   [tiltontec.qxia.base :refer [qxme]]
   [tiltontec.qxia.core
    :refer [ image button routing-get
            text-field]]
   [tiltontec.qxia.macros
    :refer-macros [hbox vbox navigation-page form carousel
                   label drawer collapsible group]]
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

(defmethod observe [:validator-fn ::qxty/m.Input]
  [_ me new-fn old _]
  
  (with-integrity [:client [:2-post-make-qx me]]
    (when new-fn
      (let [form (qxme (qx-par me))]
        (assert form)
        (println :form!!! form)
        (let [vmgr (.getValidationManager form)]
          (println :vmgr!! vmgr)
          (.add vmgr (qxme me) new-fn))))))
        
(defn make-login-form []
  (form [][:name :login]
    (text-field "Username"
      :name :u-name
      :value "KennY"
      :placeholder "Username or e-mail"
      :required true
      :requiredInvalidMessage "Please share your user name")
    (md/make ::qxty/m.PasswordField
      :name :p-word
      :label "Password"
      :value "Zoommmmm"
      :placeholder "Your password"
      :required true
      :requiredInvalidMessage "Password is required")
    (md/make ::qxty/m.NumberField
      :label "A 42-ish Quantity"
      :qx-new-args [42]
      :validator-fn (c? (fn [val] 
                          (println :bingo-val-fn!!!! val)
                          (let [qm (qxme me)
                                min (.getMinimum qm)
                                max (.getMaximum qm)
                                stp (.getStep qm)
                                emsg (cond
                                       (< val min) "Too low!"
                                       (> val max) "Too high!"
                                       (not (zero? (mod val stp))) "Out of step!")]
                            (println :emsg! emsg)
                            (when emsg
                              (.setInvalidMessage qm emsg))
                            (nil? emsg))))
      :placeholder "Uni Answer"
      :required true
      :minimum -42
      :step 42
      :maximum 420
      ;:liveUpdate true
      :invalidMessage "NOT Answer to universe"
      :requiredInvalidMessage "Answer to universe is required"
      :listeners  {"changeValue"
                  (fn [evt me]
                    (let [data (.getData evt)
                          jd (js->clj data)]
                      (println "Galaxy value!!!! jd" jd)
                      #_(md-reset! me :value
                        (get (get jd "item") "title"))))})))


(defmethod observe [:value ::qxty/m.Label]
  [_ me new old _]
  (when (not= old unbound)
    (println :obs-set-value!!!! new (ia-type me))
    (.setValue (qxme me) new)))


(defn make-login []
  (navigation-page ["Login" "/"][]
    (make-login-form)
    (button "Login"
      :listeners {"tap"
                  #(let [login (qxme (fm! :login me))
                         vmgr (.getValidationManager login)]
                     (assert vmgr)
                     (when-let [ok (.validate login)]
                       (println :ok ok :items (js->clj (.getItems login)))
                       #_(routing-get "/overview")))})

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
    ))


(defn make-picker-test []
  (vbox [:name :picker-vbox]
     (label (c? (let [myp (fget :my-pick me)]
                 (println :lbl-computing!!!!!!! (ia-type myp))
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
                      (println "picked!!!! jd" jd
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

(defmethod observe [:buttonText ::qxty/m.NavigationPage]
  [_ me new old _]
  (when (not= old unbound)
    (.setButtonText (qxme me) new)))


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
