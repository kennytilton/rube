(ns tiltontec.qxia.base
  (:require
   [clojure.set :refer [union]]
   [tiltontec.cell.base :refer [ia-type ia-types ] :as cty]
   [tiltontec.model.base :refer [md-get]]
   ))

(enable-console-print!)


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
            (derive ::m.NavigationPage ::m.Page)

            (derive ::m.Atom ::m.Widget)
            (derive  ::m.Image ::m.Widget)
            (derive  ::m.Label ::m.Widget)

            (derive  ::m.Button ::m.Atom)
            (derive  ::m.Input ::m.Widget)
            (derive  ::m.TextField ::m.Input)
            (derive  ::m.PasswordField ::m.TextField)))

(defn qx-class-new [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js

    ::m.Single nil ;; Single constructor must be passed the wrapped Form
    ;; ...and we will not have that until qx-initialize.

    ::m.Form (new js/qx.ui.mobile.form.Form)
    ::m.Composite (new js/qx.ui.mobile.container.Composite)
    ::ml.HBox (new js/qx.ui.mobile.layout.HBox)

    ::m.Atom (new js/qx.ui.mobile.basic.Atom)
    ::m.Image (new js/qx.ui.mobile.basic.Image)
    ::m.Label (new js/qx.ui.mobile.basic.Label)

    ::m.NavigationPage (new js/qx.ui.mobile.page.NavigationPage)
    ::m.Button (new js/qx.ui.mobile.form.Button)
    ::m.TextField (new js/qx.ui.mobile.form.TextField)
    ::m.PasswordField (new js/qx.ui.mobile.form.PasswordField)

    (throw (js/Error. (str "qx-class-new does not know about " type)))))

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

(defmulti qx-initialize ia-type
  :hierarchy #'cty/ia-types)

(defmethod qx-initialize :default [me]
  #_(println (str "No initialization provided for type "  (ia-type me))))

(defn qx-obj-properties [me]
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

;; js/qx.ui.mobile.basic.Atom ))
;; (loop [[type & more] (vec (list* (ia-type me)
;;                                    (ancestors ia-types (ia-type me))))
;;          properties {}]
;;     (cond
;;       type (recur more
;;               (union (qx-type-properties type)
;;                      properties))
;;       :default properties)))

;; (defn qx-initialize-type [me]
;;   (println :qx-init-type (ia-type me))
;;   (doseq [type (reverse
;;                 (list* (ia-type me)
;;                        (ancestors ia-types (ia-type me))))]
;;     (qx-initialize type me)))

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
      
  (doseq [[name handler] (md-get me :listeners)]
    (let [qxme (qxme me)]
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))


#_(defn qx-obj-properties [me]
  (loop [[type & more] (vec (list* (ia-type me)
                                   (ancestors ia-types (ia-type me))))
         properties {}]
    (cond
      type (recur more
              (union (qx-type-properties type)
                     properties))
      :default properties)))
