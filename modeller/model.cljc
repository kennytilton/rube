(ns tiltontec.modeller.model
  (:require
      [clojure.set :refer [difference]]
   #?(:cljs [tiltontec.modeller.ut-macros
             :refer-macros [trx prog1 *trx?* def-rmap-slots]]
      :clj  [tiltontec.modeller.ut-macros
             :refer :all])
   [tiltontec.modeller.utility
    :refer [any-ref? type-of err rmap-setf rmap-meta-setf]]
   #?(:clj [tiltontec.modeller.cell-types :refer :all :as cty]
      :cljs [tiltontec.modeller.cell-types
             :refer-macros [without-c-dependency]
             :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type? ia-types
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-slot-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                     *depender* *not-to-be* 
                     *c-prop-depth* md-slot-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.modeller.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.modeller.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.modeller.observer
            :refer [defobserver fn-obs observe]]
      :cljs [tiltontec.modeller.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]])

   #?(:cljs [tiltontec.modeller.cells
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.modeller.cells :refer :all])

   [tiltontec.modeller.evaluate :refer [c-get c-awaken]]
   [tiltontec.modeller.model-base
    :refer [md-get md-cell md-install-cell md-awaken]]
   [tiltontec.modeller.family :refer [*par*]]
   ))


;;; --- accessors ----

(defn md-reset! [me slot new-value]
  ;;(trx :md-reset!!!!!!! slot (md-name me) new-value)
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
     (let [me (#?(:clj ref :cljs atom) (merge {:par *par*}
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
       (rmap-meta-setf
        [:cz me]
        (->> iargs
             (partition 2)
             (filter (fn [[slot v]]
                       (md-install-cell me slot v)))
             (map vec)
             (into {})))
       (with-integrity (:awaken me)
         (md-awaken me))
       me))))

(def kwt "kenneth.tilton@ktilt.com")
(apply str (reduce (fn [[& as][& xs]]
                     (vec (map str as xs)))
                   (partition 3 kwt)))



