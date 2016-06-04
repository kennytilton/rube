(ns hello-mobile.core
  (:require
   [tiltontec.cell.base
    :refer [ia-type ia-types unbound cells-reset]
    :as cty]
   [tiltontec.cell.observer :refer [observe]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make md-reset!] :as md]
   [tiltontec.model.family
    :refer-macros [the-kids c?kids mdv!]
    :refer [fm! fget]]

   [tiltontec.qxia.types :refer [derive-tree]
    :as qxty]
   [tiltontec.qxia.base :refer [qxme]]
   [tiltontec.qxia.core
    :refer [ image button routing-get
            text-field]]
   [tiltontec.qxia.macros
    :refer-macros [hbox vbox navigation-page form carousel
                   label drawer collapsible]]
   ))

(def this-app (atom nil))

(declare make-picker-test make-login make-overview)

(defn make-family-test []
  (println :hello-make-family!!!!!!!!!!!!)
  (navigation-page ["Login!" "/"][]
    (make-picker-test)))

(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (md/make ::qxty/Mobile
     :qx-me this
     :pager pager
     :shower shower
     :kids (c?kids
             (make-family-test)
             ;; (make-login)
             ;; (make-overview)
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
      :requiredInvalidMessage "Password is required")))

(defmethod observe [:value ::qxty/m.Label]
  [_ me new old _]
  (when (not= old unbound)
    (.setValue (qxme me) new)))

(defn make-picker-test []
  (println :building-picker!!!!!!!!!!!!!!!!!!!!)
  (vbox [:name :picker-vbox]
     (label (c? (let [myp (fget :my-pick me  {:me? false
                          , :inside? false
                          , :up? true
                          , :wocd? true ;; without-c-dependency
                          })]
                 (println :lbl-computing!!!!!!! (ia-type myp))
                 (str "Start" (md-get myp :value) "End"))))
    (md/make ::qxty/m.Picker
      :name :my-pick
      :height 100
      :width 200
      :visibleItems 3
      :value (c-in "booya")
      :listeners {"changeSelection"
                  (fn [evt me]
                    (let [data (.getData evt)]
                      (println "picked!!!! " (js->clj data))
                      (md-reset! me :value (js->clj data))))}

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

(defn make-login []
  (navigation-page ["Login!" "/"][]
    (make-picker-test)

    (make-login-form)
    (button "Login"
      :listeners {"tap"  #(let [login (fm! :login me)]
                            (when (.validate (:qx-me @login))
                              (routing-get "/overview")))})
    (hbox []
      (label "picker!")
      (let [p (make-picker-test)]
        (println :picker p)
        p)
      (label "Post!"))

    (carousel [:name :carousel
               :css-class "cool"]
      (hbox [] (label "one?"))
      (hbox [] (label "two"))
      (hbox [] (label "three")))
    #_(drawer "bottom" [:name :drawer :css-class "hot"]
        (hbox [] (label "socks"))
        (hbox [] (label "shirts")))

    (collapsible "Click for a surprise" []
      (label "Surprise."))
    ))

(defn make-overview []
  (navigation-page ["Overview" "/overview"]
    [:showButton true
     :buttonText "Knock-Knock"
     :buttonIcon "identica/mmedia/games.png"
     :showBackButton true
     :backButtonText "Back Up (click broken but back key OK)"
     :listeners
     {"action" (fn [event me]
                  (md-reset! me :greet? (not (md-get me :greet?))))}
     :greet? (c-in false)
     ]
    (when (md-get me :greet?)
      (hbox []
        (vbox [:css-class "cool"]
          (label "Hello")
          (label "World"))
        (image "identica/mmedia/earth-from-moon.jpg"
          ;;:rotation -5
          ;;:scaleX 0.5 :scaleY 0.5
          ;; warning: specifiying the above suppresses css
          :css-class "warning")))))
