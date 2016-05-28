(ns hello-mobile.core
  (:require
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.qxia.core :refer [qx-make] :as qx]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.family
    :refer-macros [the-kids c?kids]]
   ))

(def this-app (atom nil))


(defn ^:export appinit [this pager shower]
  (reset! 
   this-app
   (qx-make
    ::qx/Mobile
    :kids (c?kids
               (qx-make
                ::qx/NavigationPage
                :end-point "/"
                :title "Bingo!"
                :kids (c?kids
                       (qx-make
                        ::qx/Button
                        :label "Go!"
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
                :backButtonText "Back Up"
                :listeners {"action"
                            (fn []
                              (let [rtg (. this (getRouting))]
                                (println "gogo action!")))}))))

  (let [routing (. this (getRouting))]
    (doseq [page (md-get @this-app :kids)]
      (let [qx-page (md-get page :qx-me)]
        (. pager (addDetail #js [qx-page]))
        (when-let [ept (md-get page :end-point)]
          (. routing (onGet ept shower qx-page)))))))

#_
(defn ^:export appinit [this pager shower]
  (let [bingo (new js/qx.ui.mobile.page.NavigationPage)
        over (new js/identica.page.Overview)]
    (. bingo (setTitle "BingOMG"))
    (. bingo
       (addListener
        "initialize"
        (fn []
          (let [content (. bingo (getContent))
                gogo (new qx.ui.mobile.form.Button "Go!")]
            (. gogo (addListener 
                     "tap"
                     (fn []
                       (let [rtg (. this (getRouting))]
                         (println "gogo tap!")
                         (. rtg (executeGet "/overview"))))
                     bingo))
            (. content (add gogo))))
        this))
      
    ;;(let [;;uname (new qx.ui.mobile.form.TextField)
    (comment
      (. uname (setRequired true))
      (. pgbeef (add uname "Username"))
      (. pgbeef (add gogo "Go!")))

    (. pager (addDetail #js [bingo, over]))

    (let [routing (. this (getRouting))]
      (. routing (onGet "/" shower bingo))
      (. routing (onGet "/overview" shower over)))))
