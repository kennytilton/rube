(ns tiltontec.qxia.base
  (:require
   [clojure.set :refer [union]]
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.model.base :refer [md-get]]
   ))

(enable-console-print!)

(def qx-types
  (-> (make-hierarchy)
      (derive ::Application ::Object)
      (derive ::Mobile ::Application)

      (derive ::m.Form ::Object)
      (derive ::m.Widget ::Object)
      (derive ::m.Composite ::m.Widget)

      (derive ::m.Page ::m.Composite)
      (derive ::m.NavigationPage ::m.Page)

      (derive ::m.Atom ::m.Widget)
      (derive ::m.Image ::m.Widget)
      (derive ::m.Label ::m.Widget)

      (derive ::m.Button ::m.Atom)
      (derive ::m.Input ::m.Widget)
      (derive ::m.TextField ::m.Input)
      (derive ::m.PasswordField ::m.TextField)

      ))

(defn qx-class-new [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::Mobile nil ;; mobile app instance is provided by qooxdoo. See Application.js

    ::m.Atom (new js/qx.ui.mobile.basic.Atom)
    ::m.Image (new js/qx.ui.mobile.basic.Image)
    ::m.Label (new js/qx.ui.mobile.basic.Label)

    ::m.NavigationPage (new js/qx.ui.mobile.page.NavigationPage)
    ::m.Button (new js/qx.ui.mobile.form.Button)
    ::m.TextField (new js/qx.ui.mobile.form.TextField)
    ::m.PasswordField (new js/qx.ui.mobile.form.PasswordField)
    ::m.Form (new js/qx.ui.mobile.form.Form)

    (throw (js/Error. (str "qx-class-new does not know about " type)))))

(defn qxia-type-to-qx-class [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::Mobile qx.application.Mobile

    ::m.Atom js/qx.ui.mobile.basic.Atom
    ::m.Image js/qx.ui.mobile.basic.Image
    ::m.Label js/qx.ui.mobile.basic.Label

    ::m.NavigationPage js/qx.ui.mobile.page.NavigationPage
    ::m.Form js/qx.ui.mobile.form.Form

    ::m.Button js/qx.ui.mobile.form.Button
    ::m.TextField js/qx.ui.mobile.form.TextField
    ::m.PasswordField js/qx.ui.mobile.form.PasswordField

    (throw (js/Error. (str "qxia-type-to-qx-class does not know about " type)))))

(defmulti qx-initialize ia-type)

(defmethod qx-initialize :default [me]
  (println (str "No initialization provided for type "  (ia-type me))))



(defn qx-obj-properties [me]
  (map keyword (.getProperties qx.Class
                               (or (:class @me)
                                   (qxia-type-to-qx-class (ia-type me))))))

;; js/qx.ui.mobile.basic.Atom ))
;; (loop [[type & more] (vec (list* (ia-type me)
;;                                    (ancestors qx-types (ia-type me))))
;;          properties {}]
;;     (cond
;;       type (recur more
;;               (union (qx-type-properties type)
;;                      properties))
;;       :default properties)))

(defn qx-initialize-type [me]
  (doseq [type (reverse
                (list* (ia-type me)
                       (ancestors qx-types (ia-type me))))]
    (qx-initialize type me)))

(defn qx-initialize-all [me]
  ;; n.b.: we do specify a property unless requested so
  ;; we do not shadow qooxdoo defaults with nulls.
  ;; ie, Qxia widget defaults are the qooxdoo defaults.

  (when-let [inits (for [k (qx-obj-properties me)
                         :let [val (md-get me k)]
                         :when (not (nil? val))]
                     [k val])]
    (.set (:qx-me @me)
          (clj->js (into {} inits))))
      
  (doseq [[name handler] (md-get me :listeners)]
    (let [qxme (md-get me :qx-me)]
      (.addListener qxme name
                    (fn [event]
                      (handler event me))))))


#_(defn qx-obj-properties [me]
  (loop [[type & more] (vec (list* (ia-type me)
                                   (ancestors qx-types (ia-type me))))
         properties {}]
    (cond
      type (recur more
              (union (qx-type-properties type)
                     properties))
      :default properties)))
