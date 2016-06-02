(ns hello-mobile.core
  (:require
   [tiltontec.cell.base :refer [ia-type unbound]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [md-reset!]]
   [tiltontec.model.family
    :refer-macros [the-kids c?kids]
    :refer [fm!]]
   
   [tiltontec.qxia.types :as qxty]
   [tiltontec.qxia.core
    :refer [qx-make label image button routing-get
            text-field]]
   [tiltontec.qxia.macros
    :refer-macros [hbox vbox navigation-page form carousel
                   drawer collapsible]]
   ))

(def this-app (atom nil))

(declare make-login make-overview)

(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (qx-make ::qxty/Mobile
     :qx-me this
     :pager pager
     :shower shower
     :kids (c?kids
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
      :value "KennY"
      :placeholder "Username or e-mail"
      :required true
      :requiredInvalidMessage "Please share your user name")
    (qx-make ::qxty/m.PasswordField
      :name :p-word
      :label "Password"
      :value "Zoommmmm"
      :placeholder "Your password"
      :required true
      :requiredInvalidMessage "Password is required")))

(defn make-picker-test []
  (qx-make ::qxty/m.Picker
    :height 100
    :width 200
    :visibleItems 3
    :value (c-in nil)
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
                  {:title "Phablet"}])))

(defn make-login []
  (navigation-page ["Login!" "/"][]
    (make-css-test)
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
