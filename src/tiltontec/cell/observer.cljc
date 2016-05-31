(ns tiltontec.cell.observer
  (:require
   [tiltontec.util.core
    :refer [rmap-setf]]
   [tiltontec.cell.base
    :refer [c-ref? md-ref? unbound
            +pulse+ c-slot c-value
            c-model ia-types] :as cty]))

(defn type-cljc [x]
  #?(:clj (type x)
     :cljs (or (when-let [m (meta x)]
                 (:type m))
               (type x))))

(defmulti observe (fn [slot-name me new-val old-val c]
                    [slot-name (type-cljc me)])
  :hierarchy #'cty/ia-types)

(defmethod observe :default [slot me new-val old-val c]
  #_(println :obs-fall-thru  slot (type-cljc me)))

(defmacro defobserver [slot types params & body]
     (assert (keyword? slot) "defobserver> slot should be a keyword.")
     (let [ftypes (concat types (take-last (- 1 (count types))
                                           '(::tiltontec.cell.base/model
                                             ;;js/Object js/Object
                                             )))
           fparams (concat params
                           (take-last (- 4 (count params))
                                      '(me new-value old-value c)))]
       `(defmethod tiltontec.cell.observer/observe
          [~slot ~@ftypes][~'slot ~@fparams]
          ~@body)))

(defmacro fn-obs
  "Shortcut definer for cell-specific observers. 
body can be multiple sexprs with access to
call parameters: slot, me, new, old, and c."
  [& body]
  `(fn [~'slot ~'me ~'new ~'old ~'c]
     ~@body))
     
(defn c-observe
  ([c why]
   (c-observe c unbound why))
  ([c prior-value why]
   ;; (trx :cobs-3 (c-slot c) why)
   (assert (c-ref? c))
   (rmap-setf [:pulse-observed c] @+pulse+)
   ;;(trx :c-obs-pulse! (c-slot c) why @+pulse+ (:obs @c))
   ;;(trx :c-obs-value! why (c-slot c) (c-model c) (c-value c) prior-value c)
   ((or (:obs @c) observe)
    (c-slot c)(c-model c)(c-value c) prior-value c)))


