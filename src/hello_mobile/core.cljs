(ns hello-mobile.core
  (:require
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.qxia.base :refer [qx-make] :as qxty]
   [tiltontec.qxia.core :refer [qx-make] :as qx]
   [tiltontec.model.base :refer [md-get]]
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
                :title "Login"
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
                        :listeners
                        {"tap"  (fn []
                                  (println "gogo tap!")
                                  (let [login (fm! :login me)]
                                    (assert login)
                                    (when-let [ok? (.validate (:qx-me @login))]
                                      (println :says-ok ok?)
                                      (let [rtg (.getRouting this)]
                                        (.executeGet rtg "/overview")))))})))

               (qx-make
                ::qxty/m.NavigationPage
                :end-point "/overview"
                :title "Overview"
                :showBackButton true
                :backButtonText "Back Up (click broken, back key OK)"
                :listeners {"action"
                            (fn []
                              (let [rtg (.getRouting this)]
                                (println "gogo action!")))})))))


