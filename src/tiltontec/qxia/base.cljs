(ns tiltontec.qxia.base
  (:require
   [clojure.set :refer [union difference]]
   [tiltontec.util.base :refer [prog1]]
   [tiltontec.util.core :refer [pln ensure-vec fifo-data fifo-clear]]
   [tiltontec.cell.base
    :refer [unbound ia-type  ia-type?
            +client-q-handler+] :as cty]
   [tiltontec.cell.integrity
    :refer-macros [with-integrity] :as md]
   [tiltontec.cell.observer :refer [observe +observe-default-handler+]]
   [tiltontec.model.base :refer [md-awaken-before]
    :as mdb]
   [tiltontec.model.core :refer [md-get md-getx]]
   [tiltontec.qxia.types :as qxty]

   ))


(declare qx-initialize qx-initialize-all)

(defn qxme [me] (:qx-me @me))

(enable-console-print!)

(defn app-routing []
  (let [app  (js/qx.core.Init.getApplication)]
    (.getRouting app)))

(defn qx-data-array [items]
  (new js/qx.data.Array (clj->js items)))

(defn qxia-type-to-qx-class [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::qxty/Mobile qx.application.Mobile

    ::qxty/m.Popup js/qx.ui.mobile.dialog.Popup
    ::qxty/m.Menu js/qx.ui.mobile.dialog.Menu
    ::qxty/m.BusyIndicator js/qx.ui.mobile.dialog.BusyIndicator
    ::qxty/m.Single js/qx.ui.mobile.form.renderer.Single
    ::qxty/m.Composite js/qx.ui.mobile.container.Composite
    ::qxty/m.Carousel js/qx.ui.mobile.container.Carousel
    ::qxty/m.Scroll js/qx.ui.mobile.container.Scroll
    ::qxty/m.Drawer js/qx.ui.mobile.container.Drawer
    ::qxty/m.Picker js/qx.ui.mobile.control.Picker
    ::qxty/ml.HBox js/qx.ui.mobile.layout.HBox
    ::qxty/ml.VBox js/qx.ui.mobile.layout.VBox

    ::qxty/m.Atom js/qx.ui.mobile.basic.Atom
    ::qxty/m.Image js/qx.ui.mobile.basic.Image
    ::qxty/m.Label js/qx.ui.mobile.basic.Label

    ::qxty/m.NavigationPage js/identica.NaviBack
    ::qxty/m.Form js/qx.ui.mobile.form.Form
    ::qxty/m.Group js/qx.ui.mobile.form.Group

    ::qxty/m.Button js/qx.ui.mobile.form.Button
    ::qxty/m.Slider js/qx.ui.mobile.form.Slider
    ::qxty/m.TextField js/qx.ui.mobile.form.TextField
    ::qxty/m.PasswordField js/qx.ui.mobile.form.PasswordField
    ::qxty/m.NumberField js/qx.ui.mobile.form.NumberField
    ::qxty/m.CheckBox js/qx.ui.mobile.form.CheckBox
    ::qxty/m.SelectBox js/qx.ui.mobile.form.SelectBox

    ::qxty/m.TextArea qx.ui.mobile.form.TextArea
    ::qxty/m.Title qx.ui.mobile.form.Title
    ::qxty/m.ToggleButton qx.ui.mobile.form.ToggleButton
    ::qxty/m.Row qx.ui.mobile.form.Row
    ::qxty/m.RadioGroup qx.ui.mobile.form.RadioGroup
    ::qxty/m.RadioButton qx.ui.mobile.form.RadioButton
    ::qxty/m.Canvas qx.ui.mobile.embed.Canvas
    ::qxty/m.Html qx.ui.mobile.embed.Html

    (do (println :throwing-type-err type)
        (throw (js/Error. (str "qxia-type-to-qx-class does not know about "
                            type))))))

(defn qx-class-new [type iargs]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::qxty/Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js
    ::qxty/m.Single nil ;; Single constructor must be passed the wrapped Form
    ;; ...and we will not have that until qx-initialize.
    ::qxty/m.RadioGroupStub nil ;; qooxdoo gets weird on RadioGroups
                                        ; nothing will be instantiated
                                        ; header and
                                        ; kids of this just get added to form
                                        ; ungrouped by anything
    (if-let [qx-class (or (when (contains? iargs :qx-class)
                            ;;(println :class-arg!!!!! type)
                            (let [qx-class (:qx-class iargs)]

                              (when-not qx-class
                                (println (str "ERROR! qx-class-new> key class specified but nil "
                                           "Do we need a new qx class mention in Application."))
                                (throw js/Error. (str "qx-class-new> key class specified but nil "
                                                   "Do we need a new qx class mention in Application.")))
                              qx-class))
                        (qxia-type-to-qx-class type))]
        (do
          (pln :making :qx!!!!! type (:name iargs) :finalclass qx-class
            (:qx-new-args iargs))
          (or (apply MyTerop/make qx-class (:qx-new-args iargs))
            (throw (js/Error. (str "qx-class-new tried making " qx-class
                                " but got back nada.")))))
        (throw (js/Error. (str "qx-class-new does not know about " type))))))

(defmethod mdb/md-awaken-before ::qxty/m.RadioGroupStub [me])

(defmethod mdb/md-awaken-before ::qxty/qx.Object [me]
  (when (qxia-type-to-qx-class (ia-type me)) ;; not Mobile, eg
    (with-integrity [:client [:0-make-qx me]]
      (when (nil? (qxme me))
        (swap! me assoc :qx-me
          (qx-class-new (ia-type me) @me)))
      (when-not (ia-type? me ::qxty/m.Single)
        (assert (qxme me) (str "md-awaken-before failed to establish qxme " (ia-type me))))
      (qx-initialize me)
      (qx-initialize-all me))))

;;; --- client queue handling -------------------


(def +qxl-client-task-priority+
  [:0-make-qx :1-layout :2-post-make-qx :3-post-assembly])

(defn qxia-q-handler [user-q]
  (doseq [[[qx-defer-code me] task] (reverse
                                      (fifo-data user-q))]
    (when-not (some #{qx-defer-code} +qxl-client-task-priority+)
      (throw js/Error. (str "unknown qxl client task opcode "
                         qx-defer-code))))

  (let [sorted (let [data (fifo-data user-q)]
                 (sort-by ffirst data))]
    (fifo-clear user-q)
    (doseq [[defer-info task] sorted]
      (pln :deffo (first defer-info))
      (task :client-q defer-info))))

(reset! +client-q-handler+ qxia-q-handler)

;;; ---- qx initialize ----------------------------

(defmulti qx-initialize ia-type)

(defmethod qx-initialize :default [me])

;;; --- qx properties -----------------------------------

(defn qx-obj-properties [me]
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

(defmulti  qx-initialize-all ia-type)
(defmethod qx-initialize-all ::qxty/m.Single [me])
(defmethod qx-initialize-all :default [me]
  ;; n.b.: we do not specify a property unless requested
  ;; so as not to shadow qooxdoo defaults with nulls.
  ;; ie, Qxia widget defaults are the qooxdoo defaults.

  (when-let [inits (for [k (qx-obj-properties me)
                         :let [val (md-getx :init-all me k)]
                         :when (not (nil? val))]
                     [k val])]
    (let [qx (qxme me)]
      (assert qx (str "qx-initialize-all-def> no qxme " (ia-type me)))
      (.set qx (clj->js (into {} inits)))))

  (assert (qxme me) (str "no qx initall " (ia-type me)))


  (doseq [[name handler] (md-get me :listeners)]
    (let [qxme (qxme me)]
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))

;;; --- auto-observe qx properties -------------------

(defmulti qx-property-observe
  (fn [slot me new old c]
    [slot (ia-type me)]))

(defmethod qx-property-observe :default
  [slot me new old c]
  (when-let [qxme (qxme me)]
    (when (not= old unbound)
      (let [sd (into {} [[(name slot) new]])]
        (.set qxme (clj->js sd))))))

(defn qx-observe-default [slot me new old c]
  #_(when-not (some #{slot} [:par :type])
    (println :obs-qx-fallthru slot (ia-type me)))
  (when (and
          (not (isa?  (ia-type me) ::qxty/m.RadioGroupStub))
          (isa?  (ia-type me) ::qxty/qx.Object)
          (some #{slot} (qx-obj-properties me)))
    (qx-property-observe slot me new old c)))

(reset! +observe-default-handler+ qx-observe-default)

(defn qx-add-kid [me kid]
  (assert (qxme me) (str "qx-add-kid>no qxme me" (ia-type me) me))
  (assert (qxme kid) (str "qx-add-kid> no qxme kid" (ia-type me)
                       (:name @me)
                       (ia-type kid) kid))

  (if-let [flex (:flex @kid)]
    (.add (qxme me) (qxme kid) #js {:flex flex})
    (.add (qxme me) (qxme kid))))

(defmethod observe [:css-class ::qxty/qx.Object]
  [_ me new old _]
  (with-integrity [:client [:2-post-make-qx me]]
    (when-not (= old unbound)
      (let [oldv (ensure-vec old)]
        (let [lost (if new
                     (difference (set oldv)(set (ensure-vec new)))
                     oldv)]
          (when-not (empty? lost)
            (.removeCssClasses (qxme me)
              (clj->js (vec lost)))))))
    (when new
      (let [newv (ensure-vec new)]
        (let [gained (if (= old unbound)
                       newv
                       (difference (set newv)
                         (set (ensure-vec old))))]
          (when-not (empty? gained)
            (.addCssClasses (qxme me) (clj->js (vec gained)))))))))
