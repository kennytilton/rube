(ns tiltontec.qxia.widget
  (:require
   [clojure.set :refer [difference]]
   [tiltontec.util.core :refer [pln]]
   [tiltontec.cell.base
    :refer [ia-type ia-type?  unbound]
    :as cty]
   [tiltontec.cell.evaluate :refer [not-to-be]]
   [tiltontec.cell.integrity
    :refer-macros [with-integrity]]
   [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe type-cljc]]
   [tiltontec.model.macros
    :refer-macros [pme]]

   [tiltontec.model.core :refer [md-get md-getx qx-par md-reset!]]
   [tiltontec.qxia.types :as qxty]
   [tiltontec.qxia.base
    :refer [qxme qx-obj-properties
            form-build-radio-group-stub
            qx-property-observe
            qx-class-new qx-initialize
            qxme qx-add-kid qx-data-array]]
   ))

(declare kids-refresh)

;;;--- initialize --------------------------------

(defmethod observe [:kids ::qxty/Mobile]
  [_ me new old c]
  (with-integrity [:client [:2-post-make-qx me]]
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
              (. routing (onGet ept shower qx-page)))))))))

(defmethod qx-initialize ::qxty/m.Composite [me]
  (when-let [lyo (:layout @me)]
    (.setLayout (qxme me) lyo)))


;;; --- forms + single renderer ------------------------

(defmethod observe [:kids ::qxty/m.Form]
  [_ me new old _]
  (with-integrity [:client [:2-post-make-qx me]]
    (let [qx-form (qxme me)]
      (when (not= old unbound)
        (doseq [k old]
          (let [qxk  (qxme k)
                label (md-get k :label)]
            (.remove qx-form qxk))))

      (when-let [kids new]
        (doseq [k kids]
          (case (ia-type k)
            ::qxty/m.RadioGroupStub (form-build-radio-group-stub me k)
            (let [qxk  (qxme k)
                  label (md-get k :label)]
              (.add qx-form qxk label))))))))

(defmethod qx-initialize ::qxty/m.Single [me]
  (pln :qxme :qx-init-single-enqueues-qxme!!!!)
  (with-integrity [:client [:2-post-make-qx me]]
    (pln :qxme :qx-init-single-does--qxme!!!!)
    (let [kids (:kids @me)]
      (assert (= 1 (count kids)))
      (let [form (first kids)
            qx-form (qxme form)]
        (assert qx-form)
        ;; forms differ from the usual add/remove children scheme and
        ;; must be provided to the constructor of a renderer
        ;; but the form child will not have its qx-me until now
        (pln :qxme :qx-init-single-gets-qxme!!!!)
        (swap! me assoc :qx-me (new js/qx.ui.mobile.form.renderer.Single qx-form))))))

;;; --- navigation page -------------------------------

(defmethod qx-initialize ::qxty/m.NavigationPage [page]
  (let [qx-page (qxme page)]
    (pln :qxme :page-deferring)
    (.addListener qx-page "initialize"
      (fn []
        (pln :qxme :page-fires)
        (when-let [kids (md-getx :ini-nav page :kids)]
          (let [content (. qx-page (getContent))]
            (doseq [k kids]
              (let [qxk  (qxme k)]
                (pln :qxme :navpage-initialize-add (ia-type k))
                (.add content qxk)))))
        qx-page))))

(defmethod observe [:kids ::qxty/m.NavigationPage]
  [_ page newk oldk _]
  (pln :addk :nav-page-grabs-kids-obs)
  (when (not= oldk unbound)
    (with-integrity [:client [:2-post-make-qx page]]
      (let [qx-page (qxme page)]
        (let [content (. qx-page (getContent))]
          (.removeAll content)
          (doseq [k newk]
            (let [qxk  (qxme k)]
                ;;(pln :navpage-obs-kid--add (ia-type k))
                (.add content qxk))))))))

(defmethod observe [:validator-fn ::qxty/m.Input]
  [_ me new-fn old _]
  (with-integrity [:client [:2-post-make-qx me]]
                  (when new-fn
                    (let [form (qxme (qx-par me))]
                      (assert form)
                      (let [vmgr (.getValidationManager form)]
                        (pln :validmgr-add (ia-type me))
                        (.add vmgr (qxme me) new-fn))))))

(defmethod qx-property-observe [:selection ::qxty/m.SelectBox]
  [_ me new _ _]
  (when new
    ;; we have to let the model get set first, so defer even longer
    ;; by leveraging the post-assembly tag albeit mnemonically off a bit
    (with-integrity [:client [:3-post-assembly me]]
      (assert (.getModel (qxme me)))
      (.setSelection (qxme me) new))))


;;; --- observer handles changes to kids -----------
;;;

(defmethod observe [:kids ::qxty/qx.Object]
  [_ me newk oldk _]
  (case (ia-type me)
    ;; these next two deviate from the norm
    ;; and need special handling by Qxia here
    ;; and elsewhere.
    ::qxty/m.Single (do)
    ::qxty/m.RadioGroupStub (do)
    (do
      (pme :addk :Object-obs-kids!!!)
      (with-integrity [:client [:2-post-make-qx me]]
        (kids-refresh me newk oldk)))))


;;; this bit pretends to be efficient but we do not yet have
;;; a parent sometimes returning the "same" kids, so really
;;; it is dropping all and adding all
;;;

(defn kids-refresh [me newk oldk]
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [kid lostks]
          (let [qxk (qxme kid)]
            (when-not [ia-type? kid ::m.Form]
              (.drop (qxme me) qxk))
            (.destroy qxk))
          (not-to-be kid)))))

  (let [new-ks (if (= oldk unbound)
                 newk
                 (difference (set newk) (set oldk)))]
    (when-not (empty? new-ks)
      (pln :addk :compo-newks!!!!!!! (ia-type me) (count new-ks))
      (doseq [k new-ks]
        (when-not (ia-type? k ::m.Form) ;; inconceivable, but be safe
          (pln :addk :compo-newk-add (ia-type me)(ia-type k))
          (qx-add-kid me k))))))

;;; --- picker ----------

(defmethod observe [:slot-data ::qxty/m.Picker]
  [_ me new old c]
  (with-integrity [:client [:2-post-make-qx me]]
    (let [p (qxme me)]
      (when (not= old unbound)
        (doseq [n (range (count old))]
          (.removeSlot p n)))
      (doseq [sd  new]
        (let [da (new js/qx.data.Array
                   (clj->js sd))]
          (.addSlot p da))))))

(defmethod observe [:validator-fn ::qxty/m.Input]
  [_ me new-fn old _]

  (with-integrity [:client [:2-post-make-qx me]]
    (when new-fn
      (let [form (qxme (qx-par me))]
        (assert form)
        (let [vmgr (.getValidationManager form)]
          (.add vmgr (qxme me) new-fn))))))

(defmethod observe [:value ::qxty/m.MValue]
  ;; oddly, value is not a property
  [_ me new old _]
  (with-integrity [:client [:2-post-make-qx me]]
    ;;(println :setval!!! (ia-type me) new old)
    (.setValue (qxme me) new)))

;;; --- canvas ------------------------

(defmethod observe [:drawing ::qxty/m.Canvas]
  [_ me new-fn _ _]
  (when new-fn
    (with-integrity [:client [:2-post-make-qx me]]
      (new-fn me))))

;;; --- popup ---------------------------

(defmethod observe [:anchor ::qxty/m.Widget]
  [_ me new-anchor  _]
  (with-integrity [:client [:2-post-make-qx me]]
    (when new-anchor
      (.setAnchor (qxme me)
        (qxme new-anchor)))))


(defmethod observe [:value ::qxty/TextField]
   [_ me new _ _]
   (with-integrity [:client [:post-make-qx me]]
     (.setValue (qxme me) new)))
