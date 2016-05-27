(ns tiltontec.qxia.core
  (:require   
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make] :as md]
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
  (println (str 'seeling-type type))
  (case type
    ::NavigationPage (new js/qx.ui.mobile.page.NavigationPage)
    ::Button (new js/qx.ui.mobile.form.Button)
    ::Mobile nil ;; mobile app instance is provided by qooxdoo runtime
    (throw (js/Error. (str "qx-class-new does not know about " type)))))


(defmulti qx-finalize ia-type)

(defmethod qx-finalize :default [me]
  (println (str "Not finalizing type " (type me)
                (ia-type me)
                (meta me))))

(defmethod qx-finalize ::NavigationPage [page]
  (println :qx-final-page!!! page)
  (let [qx-page (md-get page :qx-me)]

    ;; pattern will be to do nought unless requested so
    ;; Qxia widgets default as do qooxdoo widgets

    (when-let [x  (md-get page :title)]
      (println :page-title!!! x)
      (. qx-page (setTitle x)))

    (when-let [x (md-get page :showBackButton)]
      (. qx-page (setShowBackButton x)))

    (when-let [x (md-get page :backButtonText)]
      (. qx-page (setBackButtonText x)))

    (when-let [kids (md-get page :kids)]
      (. qx-page (addListener 
                  "initialize"
                  (fn []
                    (let [content (. page (getContent))]
                      (doseq [k kids]
                        (. content (add k)))))
                  page)))))

(defmethod qx-finalize ::Button [me]
  (when-let [lbl (md-get me :label)]
    (. (md-get me :qx-me)
       (setLabel lbl))))


(defn qx-make [type & initargs]
  (println (str "qx-making " type))
  
  (let [me (apply md/make
                  :type type
                  :qx-me (qx-class-new type)
                  initargs)]
    (println (str "qx-made " (ia-type me)))
    (when (md-get me :qx-me)
      (qx-finalize me))
    (println (str "fina;ized " (ia-type me) :boo ))
    me))

