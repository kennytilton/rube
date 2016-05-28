(ns tiltontec.qxia.base
  (:require
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.model.base :refer [md-get]]
   ))

(enable-console-print!)

(def qx-types
  (-> (make-hierarchy)
      (derive ::Mobile ::Object)
      (derive ::Widget ::Object)
      (derive ::Composite ::Widget)
      (derive ::NavigationPage ::Composite)
      (derive ::Button ::Widget)))

(defn qx-class-new [type]
  ;; make sure each of these is mentioned in your Application.js
  (case type
    ::NavigationPage (new js/qx.ui.mobile.page.NavigationPage)
    ::Button (new js/qx.ui.mobile.form.Button)
    ::Mobile nil ;; mobile app instance is provided by qooxdoo runtime
    (throw (js/Error. (str "qx-class-new does not know about " type)))))

(defmulti qx-finalize ia-type)

(defmethod qx-finalize :default [me]
  (println (str "Not finalizing type "
                (ia-type me))))

(defn qx-finalize-all [me]
  (doseq [[name handler] (md-get me :listeners)]
    (.addListener (md-get me :qx-me) name handler)))
