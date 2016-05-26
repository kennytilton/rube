(ns tiltontec.qxia.core
  (:require
   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.cell.core :refer :all])
   #?(:cljs [identica])
   [tiltontec.cell.evaluate :refer [c-get c-awaken]]
   [tiltontec.model.base
    :refer [md-get md-cell md-install-cell md-awaken]]
   [tiltontec.model.family :refer [*par*]]
   ))

#?(:cljs (enable-console-print!))

(defn ^:export booya [tag]
  (println (str "booya 11 " tag)))

(defn ^:export appinit [this pager shower]
  (println (str "the app is " this  ", pager is " pager
                ", shower is " shower))

  #?(:cljs
     (let [login (new js/identica.Bingo)]
       (println (str "login is " login))
       ;; var overview = new js/identica.page.Overview();
       ;; Add the pages to the page manager.
       ;;manager new qx.ui.mobile.page.Manager(false);
       (. pager (addDetail #js [login]))
       (let [routing (. this (getRouting))]
         (println (str "routing is " routing))
         (. routing (onGet "/" shower login))))))
