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

(defmethod qxty/qx-type-properties ::qxty/m.Input [_]
  #{
    :invalidMessage
    ;; Message which is shown in an invalid tooltip.
    ;; 	var 		
    :model
    ;; Model property for storing additional information for the including object.
    ;; 	String 		
    :required
    ;; Flag signaling if a widget is required.
    ;; 	String 		
    :requiredInvalidMessage
    ;; Message which is shown in an invalid tooltip if the #required is set to true.
    ;; 	Number 		
    :valid
    ;; Flag signaling if a widget is valid.
    ;; 	var 		
    })



;;; --- render maybe ----------------------------

(defmulti qx-render-maybe (fn [me]
                            (md-get me :renderer)))
(defmethod qx-render-maybe :default [me]
  (println :just-me!!!!!!!! (ia-type me) 
           (:renderer @me))
  (:qx-me @me))

(defmethod qx-render-maybe ::qxty/m.Single [me]
  (println :single!!!!!!!!! me)
  (new js/qx.ui.mobile.form.renderer.Single (:qx-me @me)))

;;;--- finalize kids ---------------------------

(defmulti qx-finalize-kids ia-type)

(defmethod qx-finalize-kids :default [me]
  (when-let [kids (md-get me :kids)]
    (println :qxfinkids!!!!!!! (ia-type me))
    (let [qx-me (md-get me :qx-me)]
      (doseq [kid kids]
        (let [rmk (qx-render-maybe kid)]
          (println :compo-adding!!!!!!!!! rmk)
          (.add qx-me rmk))))))

;;;--- finalize --------------------------------

(defmethod qx-finalize ::qxty/Mobile [me]
  (let [app (:qx-me @me)
        shower (md-get me :shower)
        pager (md-get me :pager)]
    (let [routing (.getRouting app)]
      (doseq [page (md-get me :kids)]
        (println :adding-page!!!!!!!!!!! page)
        (let [qx-page (md-get page :qx-me)]
          (.addDetail pager #js [qx-page])
          (when-let [ept (md-get page :end-point)]
            (. routing (onGet ept shower qx-page))))))))

(defmethod qx-finalize ::qxty/m.Composite [me]
  (qx-finalize-kids me))

(defmethod qx-finalize ::qxty/m.Form [me]
  (let [qx-form (md-get me :qx-me)]
    (when-let [kids (md-get me :kids)]
      (doseq [k kids]
        (let [qxk  (qx-render-maybe k)
              label (md-get k :label)]
          (println :formadd!!!!!! qxk)
          (.add qx-form qxk label))))))

(defmethod qx-finalize ::qxty/m.NavigationPage [page]
  (let [qx-page (md-get page :qx-me)]
    (when-let [kids (md-get page :kids)]
      (.addListener qx-page "initialize"
                  (fn []
                    (let [content (. qx-page (getContent))]
                      (doseq [k kids]
                        (let [qxk  (qx-render-maybe k)]
                          (println :navadd!!!!!! qxk)
                          (.add content qxk)))))
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

