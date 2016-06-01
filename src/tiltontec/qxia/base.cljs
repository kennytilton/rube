(ns tiltontec.qxia.base
  (:require
   [clojure.set :refer [union]]
   [tiltontec.cell.base :refer [ia-type ia-types ] :as cty]
   [tiltontec.model.base :refer [md-get]]
   ))

(enable-console-print!)

(defn RTG []
  (.getRouting (js/qx.core.Init.getApplication)))


(set! cty/ia-types
        (-> cty/ia-types
            (derive ::Application ::Object)
            (derive ::Mobile ::Application)

            (derive ::ml.Abstract ::Object)
            (derive ::ml.AbstractBox ::ml.Abstract)
            (derive ::ml.HBox ::ml.AbstractBox)
            (derive ::ml.VBox ::ml.AbstractBox)

            (derive ::m.Form ::Object)
            (derive ::m.Single ::Object)
            (derive ::m.Widget ::Object)
            (derive ::m.Composite ::m.Widget)
    
            (derive ::m.Page ::m.Composite)
            (derive ::m.Scroll ::m.Composite)
            (derive ::m.NavigationPage ::m.Page)

            (derive ::m.Atom ::m.Widget)
            (derive  ::m.Image ::m.Widget)
            (derive  ::m.Label ::m.Widget)

            (derive  ::m.Button ::m.Atom)
            (derive  ::m.Input ::m.Widget)
            (derive  ::m.TextField ::m.Input)
            (derive  ::m.PasswordField ::m.TextField)))

(defn qxia-type-to-qx-class [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::Mobile qx.application.Mobile
    ::m.Single js/qx.ui.mobile.form.renderer.Single
    ::m.Composite js/qx.ui.mobile.container.Composite

    ::ml.HBox js/qx.ui.mobile.layout.HBox
    ::ml.VBox js/qx.ui.mobile.layout.VBox

    ::m.Atom js/qx.ui.mobile.basic.Atom
    ::m.Image js/qx.ui.mobile.basic.Image
    ::m.Label js/qx.ui.mobile.basic.Label

    ::m.NavigationPage js/qx.ui.mobile.page.NavigationPage
    ::m.Form js/qx.ui.mobile.form.Form

    ::m.Button js/qx.ui.mobile.form.Button
    ::m.TextField js/qx.ui.mobile.form.TextField
    ::m.PasswordField js/qx.ui.mobile.form.PasswordField

    (throw (js/Error. (str "qxia-type-to-qx-class does not know about " type)))))

(defn qx-class-new [type iargs]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js
    ::m.Single nil ;; Single constructor must be passed the wrapped Form
    ;; ...and we will not have that until qx-initialize.
    (do
        (if-let [qx-class (or (:class iargs)
                              (qxia-type-to-qx-class type))]
          (apply MyTerop/make qx-class (:qx-new-args iargs))
          (throw (js/Error. (str "qx-class-new does not know about " type)))))))

(defmulti qx-initialize ia-type
  :hierarchy #'cty/ia-types)

(defmethod qx-initialize :default [me]
  #_(println (str "No initialization provided for type "  (ia-type me))))

(defn qx-obj-properties [me]
  (println :me @me)
  (println :typefo (ia-type me) (:class @me))
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

(defn qxme [me] (md-get me :qx-me))

(defn qx-initialize-all [me]
  ;; n.b.: we do specify a property unless requested so
  ;; we do not shadow qooxdoo defaults with nulls.
  ;; ie, Qxia widget defaults are the qooxdoo defaults.
  (when-let [inits (for [k (qx-obj-properties me)
                         :let [val (md-get me k)]
                         :when (not (nil? val))]
                     [k val])]
    (.set (qxme me)
          (clj->js (into {} inits))))
      
  (when-let [c (:css-class @me)]
    (if (coll? c)
      (let [cs (vec c)]
        (.addCssClasses (qxme me) (clj->js cs)))
      (.addCssClass (qxme me) c)))

  (doseq [[name handler] (md-get me :listeners)]
    (let [qxme (qxme me)]
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))


(defn qx-add-kid [me kid]
  (if-let [flex (:flex @kid)]
    (.add (qxme me) (qxme kid) #js {:flex flex})
    (.add (qxme me) (qxme kid))))
