(ns tiltontec.qxia.widget
  (:require
   [clojure.set :refer [difference]]
   [tiltontec.cell.base :refer [ia-type unbound]]
   [tiltontec.cell.evaluate :refer [not-to-be]]
   [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.qxia.base :refer [qx-obj-properties 
                                qx-class-new qx-initialize] :as qxty]

   ))

;;; --- render maybe ----------------------------

(defmulti qx-render-maybe (fn [me]
                            (md-get me :renderer)))
(defmethod qx-render-maybe :default [me]
  (:qx-me @me))

(defmethod qx-render-maybe ::qxty/m.Single [me]
  (new js/qx.ui.mobile.form.renderer.Single (:qx-me @me)))

;;;--- finalize kids ---------------------------

(defmulti qx-initialize-kids ia-type)

(defmethod qx-initialize-kids :default [me]
  (when-let [kids (md-get me :kids)]
    ;; (println :qxfinkids!!!!!!! (ia-type me))
    (let [qx-me (md-get me :qx-me)]
      (doseq [kid kids]
        (let [rmk (qx-render-maybe kid)]
          (.add qx-me rmk))))))

;;;--- finalize --------------------------------

(defmethod qx-initialize ::qxty/Mobile [me]
  (let [app (:qx-me @me)
        shower (md-get me :shower)
        pager (md-get me :pager)]
    (let [routing (.getRouting app)]
      (doseq [page (md-get me :kids)]
        (let [qx-page (md-get page :qx-me)]
          (.addDetail pager #js [qx-page])
          (when-let [ept (md-get page :end-point)]
            (. routing (onGet ept shower qx-page))))))))

(defmethod qx-initialize ::qxty/m.Composite [me]
  (qx-initialize-kids me))

(defmethod qx-initialize ::qxty/m.Form [me]
  (let [qx-form (md-get me :qx-me)]
    (when-let [kids (md-get me :kids)]
      (doseq [k kids]
        (let [qxk  (qx-render-maybe k)
              label (md-get k :label)]
          (.add qx-form qxk label))))))

(defmethod qx-initialize ::qxty/m.NavigationPage [page]
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

(defmethod observe [:kids ::qxty/m.Composite]
  [_ me newk oldk _]
  (when-not (= oldk unbound)
    (println :compo-kids!!!! (ia-type me) newk)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (println :zapping lostks)
        (doseq [qxk lostks]
          (.add (:qx-me @me) qxk)
          (.destroy qxk)
          (not-to-be qxk))))
    (let [new-ks (difference (set newk) (set oldk))]
      (when-not (empty? new-ks)
        (println :adding new-ks)
        (doseq [k new-ks]
          (let [qxk  (qx-render-maybe k)]
            (println :OBS-add!!!!!! qxk)
            (.add (:qx-me @me) qxk)))))))

