(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [identica]
   [tiltontec.cell.evaluate :refer [c-get c-awaken]]
   [tiltontec.model.base
    :refer [md-get md-cell md-install-cell md-awaken]]
   [tiltontec.model.family :refer [*par*]]
   ))

(enable-console-print!)

(defn ^:export booya [tag]
  (println (str "booya 11 " tag)))


(defn ^:export appinit [this pager shower]
  (println (str "the CLJS app is " this  ", pager is " pager
                ", shower is " shower))

  (let [bingo2 (new js/identica.Bingo)
        bingo (new js/qx.ui.mobile.page.NavigationPage)
        over (new js/identica.page.Overview)]
    (println (str "bingo is " bingo))
    (. bingo (setTitle "BingOMG"))
    (. bingo
       (addListener
        "initialize"
        (fn []
          (let [content (. bingo (getContent))
                gogo (new qx.ui.mobile.form.Button "Go!")]

            (println (str "bgobeef is" content))

            (. gogo (addListener 
                     "tap"
                     (fn []
                       (let [rtg (. this (getRouting))]
                         (println "btn rtg is " rtg)
                         (println "gogo tap!")
                         (. rtg (executeGet "/overview"))))
                     bingo))

            (. content (add gogo))))
        this))
      
    ;;(let [;;uname (new qx.ui.mobile.form.TextField)
    (comment
      (. uname (setRequired true))
      (. gogo (addListener "tap"
                           (fn []
                             (println "gogo tap!"))
                           bingo))

      (. pgbeef (add uname "Username"))
      (. pgbeef (add gogo "Go!")))

    (println (str "over is " over))
    (. pager (addDetail #js [bingo, over]))

    (let [routing (. this (getRouting))]
      (println (str "routing is " routing))
      (. routing (onGet "/" shower bingo))
      (. routing (onGet "/overview" shower over)))))
