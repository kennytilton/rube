(ns hello-mobile.core
  (:require
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [md-reset!]]
   [tiltontec.model.family
    :refer-macros [the-kids c?kids]
    :refer [fm!]]
   [tiltontec.qxia.base :refer [qx-make RTG] :as qxty]
   [tiltontec.qxia.core :refer [qx-make label image button] :as qx]
   ))

(def this-app (atom nil))

(declare make-login make-overview)

(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (qx-make
    ::qxty/Mobile
    :qx-me this
    :pager pager
    :shower shower
    :kids (c?kids
           (make-login)
           (make-overview)))))

(defn make-css-test []
  (qx-make
   ::qxty/m.Composite
   :layout (new js/qx.ui.mobile.layout.HBox)
   :kids (c?kids
          (label "Hello cool2"
           :flex 0
           :css-class "cool")
          (qx-make
           ::qxty/m.Label
           :flex 1
           :css-class '("hot" "coolfont")
           :value "Hello cool,")
          
          (qx-make
           ::qxty/m.Label
           :flex 3
           :css-class ["cool" "coolfont"]
           :value "world."))))

(defn make-login-form []
  (qx-make
   ::qxty/m.Single
   :kids (c?kids
          (qx-make ::qxty/m.Form
                   :name :login
                   :kids (c?kids
                          (qx-make ::qxty/m.TextField
                                   :name :u-name
                                   :label "Username"
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
                                   :requiredInvalidMessage "Password is required"))))))

(defn make-login []
  (qx-make
   ::qxty/m.NavigationPage
   :end-point "/"
   :title "Login!"
   :kids (c?kids
          (make-css-test)
          (make-login-form)
          (button "Loginzilla!!!"
           :listeners {"tap"  #(let [login (fm! :login me)]
                                 (when (.validate (:qx-me @login))
                                   (.executeGet (RTG) "/overview")))}))))

(defn make-overview []
  (qx-make
   ::qxty/m.NavigationPage
   :end-point "/overview"
   :title "Overview"
   :showButton true
   :buttonText "Knock-Knock"
   :buttonIcon "identica/mmedia/games.png"
   :showBackButton true
   :backButtonText "Back Up (click broken but back key OK)"
   :listeners
   {"action" (fn [event me]
               (md-reset! me :greet? (not (md-get me :greet?))))}
   :greet? (c-in false)
   :kids (c?kids
          (when (md-get me :greet?)
            (qx-make
             ::qxty/m.Composite
             :layout (new js/qx.ui.mobile.layout.HBox)
             :kids (c?kids
                    (qx-make
                     ::qxty/m.Composite
                     :layout (new js/qx.ui.mobile.layout.VBox)
                     :css-class "cool"
                     :kids (c?kids
                            (label "Hello")
                            (label "World")))
                    
                    (image "identica/mmedia/earth-from-moon.jpg"
                           ;;:rotation -5
                           ;;:scaleX 0.5 :scaleY 0.5
                           ;; warning: specifiying the above suppresses css
                           :css-class "warning")))))))
