(ns hello-mobile.core
  (:require
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.qxia.core :refer [qx-make] :as qx]
   [tiltontec.model.family
    :refer-macros [c?kids]]
   ))


(defn ^:export appinit [this pager shower]
  (qx-make
   ::qx/Mobile
   :kids (c?kids
          (qx-make
           ::qx/NavigationPage
           :end-point "/"
           :title "BingoBooya!"
           :kids (c?kids
                  (qx-make
                   ::qx/Button
                   :inits ["Go!"]
                   :listeners 
                   {"tap"  (fn []
                             (let [rtg (. this (getRouting))]
                               (println "gogo tap!")
                               (. rtg (executeGet "/overview"))))})))
          (qx-make
           ::qx/NavigationPage
           :end-point "/overview"
           :title "Overview"
           :showBackButton true
           :backButtonText "Back Up"))))
