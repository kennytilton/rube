(ns hello-mobile.core
  (:require
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.qxia.base :refer [qx-make] :as qxty]
   [tiltontec.qxia.core :refer [qx-make] :as qx]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [md-reset!]]
   [tiltontec.model.family
    :refer-macros [the-kids c?kids]
    :refer [fm!]]
   ))

(def this-app (atom nil))

(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (qx-make
    ::qxty/Mobile
    :qx-me this
    :pager pager
    :shower shower
    :kids (c?kids
               (qx-make
                ::qxty/m.NavigationPage
                :end-point "/"
                :title "Login!"
                :kids (c?kids
                       (qx-make ::qxty/m.Form
                                :name :login
                                :renderer ::qxty/m.Single
                                :kids (c?kids
                                       (qx-make ::qxty/m.TextField
                                                :name :u-name
                                                :label "Username"
                                                :required true
                                                :requiredInvalidMessage "Please share your user name")
                                       (qx-make ::qxty/m.PasswordField
                                                :name :p-word
                                                :label "Password"
                                                :required true
                                                :requiredInvalidMessage "Password is required")))
                       (qx-make
                        ::qxty/m.Button
                        :label "Login"
                        :listeners {"tap"  #(let [login (fm! :login me)]
                                              (when true ;; (.validate (:qx-me @login))
                                                (let [rtg (.getRouting this)]
                                                  (.executeGet rtg "/overview"))))})))

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
                            (println "gogo action?" event (ia-type me))
                            (let [rtg (.getRouting this)]
                              ;; (println :cz!!! (:cz @sib))
                              (md-reset! me :greet? (not (md-get me :greet?)))))}
                 :greet? (c-in false)
                :kids (c?kids
                       (when  (md-get me :greet?)
                         (qx-make
                          ::qxty/m.Image
                          :class js/qx.ui.mobile.basic.ImageZZZ
                          :rotation 15
                          :scaleX 0.5 :scaleY 0.5
                          :source "identica/mmedia/earth-from-moon.jpg"))))))))
