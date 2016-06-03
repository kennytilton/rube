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
   [tiltontec.model.base :refer [md-get md-getx]]
   [tiltontec.qxia.types :as qxty]
   [tiltontec.qxia.base
    :refer [qxme qx-obj-properties 
            qx-class-new qx-initialize
            qxme qx-add-kid]]
   ))


;;;--- initialize --------------------------------

(defmethod observe [:kids ::qxty/Mobile]
  [_ me new old c]
  (let [app (:qx-me @me)
        shower (:shower @me)
        pager (:pager @me)]
    (let [routing (.getRouting app)]
      (when (not= old unbound)
        (doseq [page old]
          (when-let [ept (:end-point @page)]
            (. routing (remove ept)))
          (.removeDetail pager (qxme page))))
      (doseq [page new]
        (let [qx-page (qxme page)]
          (.addDetail pager qx-page)
          (when-let [ept (:end-point @page)]
            (. routing (onGet ept shower qx-page))))))))

(defmethod qx-initialize ::qxty/m.Composite [me]
  (when-let [lyo (:layout @me)]
    (.setLayout (qxme me) lyo)))

(defmethod observe [:kids ::qxty/m.Form]
  [_ me new old _]
  (let [qx-form (qxme me)]
    (when (not= old unbound)
      (doseq [k old]
        (let [qxk  (qxme k)
              label (md-get k :label)]
          (.remove qx-form qxk))))

    (when-let [kids new]
      (doseq [k kids]
        (let [qxk  (qxme k)
              label (md-get k :label)]
          (.add qx-form qxk label))))))

(defmethod observe [:kids ::qxty/m.Single]
  [_ me new old _]
  (when (= old unbound)
    (assert (= 1 (count new)))
    (let [form (first new)
          qx-form (qxme form)]
      (assert qx-form)
      ;; forms differ from the usual add/remove children scheme and
      ;; must be provided to the constructor of a renderer
      ;; but the form child will not have its qx-me until now
      (swap! me assoc :qx-me (new js/qx.ui.mobile.form.renderer.Single qx-form)))))

(defmethod qx-initialize ::qxty/m.NavigationPage [page]
  (let [qx-page (qxme page)]
    (.addListener qx-page "initialize"
      (fn []
        (when-let [kids (md-getx :ini-nav page :kids)]
          (let [content (. qx-page (getContent))]
            (doseq [k kids]
              (let [qxk  (qxme k)]
                (.add content qxk)))))
        qx-page))))

(defmethod observe [:kids ::qxty/m.NavigationPage]
  [_ me newk oldk _]
  (println :navi-page-kids-obs-blocks-compo!!!!!))

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
          (not-to-be kid)))))

  (let [new-ks (difference (set newk) (set oldk))]
    (when-not (empty? new-ks)
      (doseq [k new-ks]
        (when-not (ia-type? k ::m.Form) ;; inconceivable, but be safe
          (qx-add-kid me k))))))

;;; --- picker ----------


(defmethod observe [:slot-data ::qxty/m.Picker]
  [_ me new old c]
  (println :obs-sd (ia-type me) new old)
  (let [p (qxme me)]
    (when (not= old unbound)
      (doseq [n (range (count old))]
        (.removeSlot p n)))
    (doseq [sd  new]
      (println :pickslot!! sd)
      (let [da (new js/qx.data.Array
                 (clj->js sd))]
        (.addSlot p da)))))
