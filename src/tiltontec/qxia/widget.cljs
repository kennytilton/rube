(ns tiltontec.qxia.widget
  (:require
    [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.qxia.base :refer [qx-obj-properties qx-type-properties 
                                qx-class-new qx-finalize] :as qxty]

   ))

(defmethod qx-type-properties ::qxty/m.Atom [_]
  #{:defaultCssClass :icon :iconPosition :label :show})

(defmethod qx-type-properties ::qxty/m.Image [_]
  #{:source})

(defmethod qx-type-properties ::qxty/m.Label [_]
  #{:anonymous :defaultCssClass :value :wrap})

(defmethod qx-type-properties ::qxty/m.Button [_]
  #{:activatable :defaultCssClass})

(defmethod qx-type-properties ::qxty/m.Widget [_]
  #{:activatable :anonymous :defaultCssClass :enabled :id :name :rotation :scaleX
    :scaleY :transformUnit :translateX :translateY :translateZ :visibility})

(defmethod qx-type-properties ::qxty/m.Page [_]
  #{:defaultCssClass :fireDomUpdatedOnResize})

(defmethod qxty/qx-type-properties ::qxty/m.NavigationPage [_]
  #{:title :showBackButton :backButtonText
    :buttonIcon :buttonText :contentCssClass
    :navigationBarHidden :navigationBarToggleDuration
    :showBackButtonOnTablet :showButton})

;;; --- NavigtionPage

(defmethod qx-finalize ::qxty/m.NavigationPage [page]
  (let [qx-page (md-get page :qx-me)]
    (when-let [kids (md-get page :kids)]
      (println :nav-page-kids!!!!!!! kids)
      (.addListener qx-page "initialize"
                  (fn []
                    (let [content (. qx-page (getContent))]
                      (doseq [k kids]
                        (let [qxk (md-get k :qx-me)]
                          (assert qxk)
                          (. content (add qxk))))))
                  qx-page))))

(defmethod observe [:kids ::qxty/m.NavigationPage]
  [_ _ newk oldk _]
  (println :nav-kids-obs!!!! newk oldk)
  #_
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          (not-to-be k))))))
