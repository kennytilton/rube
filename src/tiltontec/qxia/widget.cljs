(ns tiltontec.qxia.widget
  (:require
   [clojure.set :refer [difference]]
   [tiltontec.cell.base
    :refer [ia-type ia-type? ia-types unbound]
    :as cty]
   [tiltontec.cell.evaluate :refer [not-to-be]]
   [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe type-cljc]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.qxia.base
    :refer [qxme qx-obj-properties 
            qx-class-new qx-initialize
            qxme] :as qxty]

   ))



;;;--- finalize kids ---------------------------

(defmulti qx-initialize-kids ia-type
  :hierarchy #'cty/ia-types)


(defmethod qx-initialize-kids :default [me]
  (when-let [kids (md-get me :kids)]
    (println :fall-thru-qxfinkids!!!!!!! (ia-type me))
    (let [qx-me (md-get me :qx-me)]
      (doseq [kid kids]
        (let [rmk (qxme kid)]
          (.add qx-me rmk))))))

;;;--- initialize --------------------------------

(defmethod qx-initialize ::qxty/Mobile [me]
  (let [app (:qx-me @me)
        shower (md-get me :shower)
        pager (md-get me :pager)]
    (let [routing (.getRouting app)]
      (doseq [page (md-get me :kids)]
        (let [qx-page (qxme page)]
          (.addDetail pager #js [qx-page])
          (when-let [ept (md-get page :end-point)]
            (. routing (onGet ept shower qx-page))))))))

(defmethod qx-initialize ::qxty/m.Composite [me]
  (when-let [lyo (:layout @me)]
    (println :init-setting-layo!!!!! lyo (ia-type me))
    (.setLayout (qxme me) lyo))
  (qx-initialize-kids me))

(defmethod qx-initialize ::qxty/m.Form [me]
  (let [qx-form (qxme me)]
    (when-let [kids (md-get me :kids)]
      (doseq [k kids]
        (let [qxk  (qxme k)
              label (md-get k :label)]
          (.add qx-form qxk label))))))

(defmethod qx-initialize ::qxty/m.Single [me]
  (let [kids (md-get me :kids)]
    (assert (= 1 (count kids)))
    (let [form (first kids)
          qx-form (qxme form)]
      (assert qx-form)
      ;; forms differ from the usual add/remove children scheme and
      ;; must be provided to the constructor of a renderer
      ;; but the form child will not have its qx-me until now
      (println :swapsingle!!!!!!!!!!! qx-form)
      (swap! me assoc :qx-me (new js/qx.ui.mobile.form.renderer.Single qx-form)))))

(defmethod qx-initialize ::qxty/m.NavigationPage [page]
  (let [qx-page (qxme page)]
    (when-let [kids (md-get page :kids)]
      (.addListener qx-page "initialize"
                  (fn []
                    (let [content (. qx-page (getContent))]
                      (doseq [k kids]
                        (let [qxk  (qxme k)]
                          (.add content qxk)))))
                  qx-page))))


(defmethod qx-initialize ::qxty/m.TextField [me]
  (.setValue (qxme me) (:value @me)))

;;; --- observer handles changes to kids -----------
;;; 
;;; this bit pretends to be efficient but we do not yet have 
;;; a parent sometimes returning the "same" kids, so really
;;; it is dropping all and adding all
;;;
(defmethod observe [:kids ::qxty/m.Composite]
  [_ me newk oldk _]
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [kid lostks]
          (let [qxk (qxme kid)]
            (when-not [ia-type? kid ::m.Form]
              (.drop (qxme me) qxk))
            (.destroy qxk))
          (not-to-be kid))))

    (let [new-ks (difference (set newk) (set oldk))]
      (when-not (empty? new-ks)
        (doseq [k new-ks]
          (when-not (ia-type? k ::m.Form)
            (let [qxk  (qxme k)]
              (.add (qxme me) qxk))))))))

