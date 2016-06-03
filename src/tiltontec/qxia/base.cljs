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
   [tiltontec.model.base :refer [md-awaken-before
                                 md-get md-getx]
    :as mdb]
   [tiltontec.qxia.types :as qxty]
   
   ))

(enable-console-print!)

(defn app-routing []
  (let [app  (js/qx.core.Init.getApplication)]
    (println :app!!! app)
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

    ::qxty/m.Button js/qx.ui.mobile.form.Button
    ::qxty/m.TextField js/qx.ui.mobile.form.TextField
    ::qxty/m.PasswordField js/qx.ui.mobile.form.PasswordField

    (throw (js/Error. (str "qxia-type-to-qx-class does not know about " type)))))

(defn qx-class-new [type iargs]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::qxty/Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js
    ::qxty/m.Single nil ;; Single constructor must be passed the wrapped Form
    ;; ...and we will not have that until qx-initialize.
    
    (if-let [qx-class (or (when (contains? iargs :class)
                            (let [qx-class (:class iargs)]
                              (when-not qx-class
                                (println (str "ERROR! qx-class-new> key class specified but nil "
                                           "Do we need a new qx class mention in Application."))
                                (throw js/Error. (str "qx-class-new> key class specified but nil "
                                                   "Do we need a new qx class mention in Application.")))
                              qx-class))
                        (qxia-type-to-qx-class type))]
        (do
          #_(println (:name iargs) :finalclass qx-class
            (:qx-new-args iargs))
          (apply MyTerop/make qx-class (:qx-new-args iargs)))
        (throw (js/Error. (str "qx-class-new does not know about " type))))))


(defmethod mdb/md-awaken-before ::qxty/qx.Object [me]
  (println :awk-before!!! (ia-type me))
  (when (qxia-type-to-qx-class (ia-type me))
    (println :yes-qing!!!!!!!!!!!!!)
    (with-integrity [:client [:0-make-qx me]]
      (println :qxia-obj-gets-its:obj!!! (ia-type me))
      (swap! me assoc :qx-me
        (qx-class-new (ia-type me)
          (:qx-new-args @me))))))

;;; --- client queue handling -------------------


(def +qxl-client-task-priority+
  [:0-make-qx :1-layout :2-post-make-qx :3-post-assembly])

(defn qxia-q-handler [user-q]
  (println :qxia-handler!!!!!! 
    (type (fifo-data user-q)))
  (println :data  (fifo-data user-q))
  (doseq [[[qx-defer-code me] task] (fifo-data user-q)]
    (when-not (some #{qx-defer-code} +qxl-client-task-priority+)
      (throw js/Error. (str "unknown qxl client task opcode "
                         qx-defer-code))))

  (let [sorted (let [data (fifo-data user-q)]
                 (println :firstd (first data))
                 (println :ffirst (ffirst (first data)))
                 (sort-by ffirst data))]
    (println :sorted!!!!!!!!!!)
    (println :sorted!!!!!!!!!! (count sorted))
    (fifo-clear user-q)
    (println :cleared)
    (doseq [[defer-info task] sorted]
      (println :ddeffo!!! defer-info)
      (task :client-q defer-info))))

(reset! +client-q-handler+ qxia-q-handler)

(println :voila!!!!!!!! @+client-q-handler+)
;;; ---- qx initialize ----------------------------

(defmulti qx-initialize ia-type
  :hierarchy #'cty/ia-types)

(defmethod qx-initialize :default [me]
  #_(println (str "No initialization provided for type "  (ia-type me))))

(defn qx-obj-properties [me]
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

(defn qxme [me] (:qx-me @me))

(defn qx-initialize-all [me]
  ;; n.b.: we do specify a property unless requested so
  ;; we do not shadow qooxdoo defaults with nulls.
  ;; ie, Qxia widget defaults are the qooxdoo defaults.
  (when-let [inits (for [k (qx-obj-properties me)
                         :let [val (md-getx :init-all me k)]
                         :when (not (nil? val))]
                     [k val])]
    (.set (qxme me)
          (clj->js (into {} inits))))
      
  (when-let [c (:css-class @me)]
    (if (coll? c)
      (let [cs (vec c)]
        (.addCssClasses (qxme me) (clj->js cs)))
      (.addCssClass (qxme me) c))))

(defmethod observe [:listeners ::qx.Object]
  [_ me new old _]
  (when (not= old unbound)
    (println :time-to-hack-remove-listeners))
  (doseq [[name handler] new]
    (let [qxme (qxme me)]
      (println :bingo-listener! name (ia-type me))
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))


(defn qx-add-kid [me kid]
  (println :add-kid (ia-type me)(ia-type kid))
  (if-let [flex (:flex @kid)]
    (.add (qxme me) (qxme kid) #js {:flex flex})
    (.add (qxme me) (qxme kid))))
