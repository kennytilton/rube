(ns tiltontec.model.core
  (:require
      [clojure.set :refer [difference]]
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1 *trx?* def-rmap-slots]]
      :clj  [tiltontec.util.base
             :refer :all])
   [tiltontec.util.core
    :refer [any-ref? type-of err rmap-setf rmap-meta-setf]]
   #?(:clj [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type? ia-types ia-type
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-slot-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                     *depender* *not-to-be* 
                     *c-prop-depth* md-slot-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.cell.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.cell.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.cell.observer
            :refer [ observe]]
      :cljs [tiltontec.cell.observer
             :refer [observe]])


   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.cell.core :refer :all])

   [tiltontec.cell.evaluate :refer [c-get c-awaken]]
   [tiltontec.model.base
    :refer [md-get md-cell md-install-cell md-awaken]]
   [tiltontec.model.family :refer [*par*]]
   ))

;;; --- accessors ----

(defn md-reset! [me slot new-value]
  (if-let [c  (md-cell me slot)]
    (c-reset! c new-value)
    (do
      (err str "change to slot %s not mediated by cell" slot)
      (rmap-setf [slot me] new-value))))

(defn make [& iargs]
  (cond
    (odd? (count iargs)) (apply make :type iargs)
    :else
    (#?(:clj dosync :cljs do)
     ;;(println (str :md-making (nth iargs 1)))
     (let [me (#?(:clj ref :cljs atom)
               (merge {:par *par*}
                      (->> iargs
                           (partition 2)
                           (filter (fn [[slot v]]
                                     (not (= :type slot))))
                           (map (fn [[k v]]
                                  (vector k (if (c-ref? v)
                                              unbound
                                              v))))
                           (into {})))
               :meta (merge {:state :nascent}
                            (->> iargs
                                 (partition 2)
                                 (filter (fn [[slot v]]
                                           (= :type slot)))
                                 (map vec)
                                 (into {}))))]
       (assert (meta me))
       ;;(println (str "made me!!!!!!!" (:type (meta me))))
       (rmap-meta-setf
        [:cz me]
        (->> iargs
             (partition 2)
             (filter (fn [[slot v]]
                       (md-install-cell me slot v)))
             (map vec)
             (into {})))
       (with-integrity (:awaken me)
         ;;(println :awakening (ia-type me))
         (md-awaken me))
       me))))




