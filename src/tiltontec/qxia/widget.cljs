(ns tiltontec.qxia.widget
  (:require
    [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.qxia.base :refer [qx-class-new qx-finalize] :as qxty]

   ))

(defmethod qx-finalize ::qxty/Button [me]
  (when-let [lbl (md-get me :label)]
    (.setLabel (md-get me :qx-me) lbl)))

;;; --- NavigtionPage

(defmethod qx-finalize ::qxty/NavigationPage [page]
  (let [qx-page (md-get page :qx-me)]

    ;; pattern will be to do nought unless requested so
    ;; Qxia widgets default as do qooxdoo widgets

    (when-let [x  (md-get page :title)]
      (.setTitle qx-page x))

    (when-let [x (md-get page :showBackButton)]
      (.setShowBackButton qx-page x))

    (when-let [x (md-get page :backButtonText)]
      (.setBackButtonText qx-page x))


    (when-let [kids (md-get page :kids)]
      ;;(println :nav-page-kids!!! kids)
      (.addListener qx-page "initialize"
                  (fn []
                    (let [content (. qx-page (getContent))]
                      (doseq [k kids]
                        (let [qxk (md-get k :qx-me)]
                          (assert qxk)
                          (. content (add qxk))))))
                  qx-page))))

(defmethod observe [:kids ::qxty/NavigationPage]
  [_ _ newk oldk _]
  (println :nav-kids-obs!!!! newk oldk)
  #_
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          (not-to-be k))))))
