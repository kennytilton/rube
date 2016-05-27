(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make] :as md]
   ))

(enable-console-print!)

(def qx-types
  (-> (make-hierarchy)
      (derive ::Mobile ::Object)
      (derive ::Widget ::Object)
      (derive ::Composite ::Widget)
      (derive ::NavigationPage ::Composite)
      (derive ::Button ::Widget)))

(defn qx-class-new [type]
  ;; make sure each of these is mentioned in your Application.js
  (println (str 'seeling-type type))
  (case type
    ::NavigationPage (new js/qx.ui.mobile.page.NavigationPage)
    ::Button (new js/qx.ui.mobile.form.Button)
    ::Mobile nil ;; mobile app instance is provided by qooxdoo runtime
    (throw (js/Error. (str "qx-class-new does not know about " type)))))


(defn qx-finalize [x]
  (println (str "Not finalizing " x
                " type " (type x))))

(defn qx-make [type & initargs]
  (let [me (apply md/make
                  :type type
                  :qx-me (qx-class-new type)
                  initargs)]
    (when-let [qx-me (md-get me :qx-me)]
      (. qx-me (addListener 
                "initialize"
                (fn []            
                  (qx-finalize me)))))
    me))

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
