(ns tiltontec.qxia.base
  (:require
   [clojure.set :refer [union]]
   [tiltontec.util.base :refer [prog1]]
   [tiltontec.util.core :refer [fifo-data fifo-clear]]
   [tiltontec.cell.base
    :refer [unbound ia-type ia-types
            +client-q-handler+] :as cty]
   [tiltontec.cell.integrity
    :refer-macros [with-integrity] :as md]
   [tiltontec.cell.observer :refer [observe]]
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
    (println :app!!!!!!!!!!! app)
    (assert app "app touyign")
    (.getRouting app)))


(defn qxia-type-to-qx-class [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::qxty/Mobile qx.application.Mobile
    ::qxty/m.Single js/qx.ui.mobile.form.renderer.Single
    ::qxty/m.Composite js/qx.ui.mobile.container.Composite
    ::qxty/m.Carousel js/qx.ui.mobile.container.Carousel
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
    ::qxty/m.TextField js/qx.ui.mobile.form.TextField
    ::qxty/m.PasswordField js/qx.ui.mobile.form.PasswordField
    ::qxty/m.NumberField js/qx.ui.mobile.form.NumberField

    (throw (js/Error. (str "qxia-type-to-qx-class does not know about " type)))))

(defn qx-class-new [type iargs]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::qxty/Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js
    ::qxty/m.Single nil ;; Single constructor must be passed the wrapped Form
    ;; ...and we will not have that until qx-initialize.

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
          #_(println type (:name iargs) :finalclass qx-class
            (:qx-new-args iargs) iargs)
          (apply MyTerop/make qx-class (:qx-new-args iargs)))
        (throw (js/Error. (str "qx-class-new does not know about " type))))))


(defmethod mdb/md-awaken-before ::qxty/qx.Object [me]
  (when (and  ;; not Mobile
          (qxia-type-to-qx-class (ia-type me)))
    ;(println :qxia-obj-queue-its:obj!!! (ia-type me))
    (with-integrity [:client [:0-make-qx me]]
      (when (nil? (qxme me))
        ;(println :qxia-obj-gets-its:obj!!! (ia-type me))
        (swap! me assoc :qx-me
          (qx-class-new (ia-type me) @me)))
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
                 ;;(println :firstd (first data))
                 ;;(println :ffirst (ffirst (first data)))
                 (sort-by ffirst data))]
    ;(println :sorted!!!!!!!!!! (count sorted))
    (fifo-clear user-q)
    (doseq [[defer-info task] sorted]
      ;(println :ddeffo!!! (first defer-info))
      (task :client-q defer-info))))

(reset! +client-q-handler+ qxia-q-handler)

;;; ---- qx initialize ----------------------------

(defmulti qx-initialize ia-type
  :hierarchy #'cty/ia-types)

(defmethod qx-initialize :default [me]
  #_(println (str "No initialization provided for type "  (ia-type me))))

(defn qx-obj-properties [me]
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

(defmulti  qx-initialize-all ia-type)
(defmethod qx-initialize-all ::qxty/m.Single [me])
(defmethod qx-initialize-all :default [me]
  ;; n.b.: we do specify a property unless requested so
  ;; we do not shadow qooxdoo defaults with nulls.
  ;; ie, Qxia widget defaults are the qooxdoo defaults.
  (when-let [inits (for [k (qx-obj-properties me)
                         :let [val (md-getx :init-all me k)]
                         :when (not (nil? val))]
                     [k val])]
    (let [qx (qxme me)]
      (assert qx (str "no qxme " (ia-type me)))
      ;(println :qx!? qx)
      (.set qx (clj->js (into {} inits)))))

  (assert (qxme me) (str "no qx initall " (ia-type me)))

  (when-let [c (:css-class @me)]
    (if (coll? c)
      (let [cs (vec c)]
        (.addCssClasses (qxme me) (clj->js cs)))
      (.addCssClass (qxme me) c)))

  (doseq [[name handler] (md-get me :listeners)]
    (let [qxme (qxme me)]
      ;;(println :bingo-listener! name (ia-type me))
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))


(defn qx-add-kid [me kid]
  ;(println :add-kid (ia-type me)(ia-type kid))
  (if-let [flex (:flex @kid)]
    (.add (qxme me) (qxme kid) #js {:flex flex})
    (.add (qxme me) (qxme kid))))
