(ns tiltontec.rube.model-base
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.rube.ut-macros
             :refer-macros [trx prog1 *trx?* def-rmap-slots def-rmap-meta-slots]]
      :clj  [tiltontec.rube.ut-macros :refer :all])
   [tiltontec.rube.utility :refer [type-of err rmap-setf rmap-meta-setf]]
   #?(:clj [tiltontec.rube.cell-types :refer :all :as cty]
      :cljs [tiltontec.rube.cell-types
             :refer-macros [without-c-dependency]
             :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type? ia-types
                     c-model mdead? c-valid? c-useds c-ref? md-ref?
                     c-state +pulse+ c-pulse-observed c-assert
                     *call-stack* *defer-changes* unbound
                     c-rule c-me c-value-state c-callers caller-ensure
                     unlink-from-callers *causation*
                     c-slot-name c-synaptic? caller-drop
                     c-pulse c-pulse-last-changed c-ephemeral? c-slot c-slots
                     *depender* *not-to-be* 
                     *c-prop-depth* md-slot-owning? c-lazy] :as cty])
   #?(:cljs [tiltontec.rube.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.rube.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.rube.observer
            :refer [defobserver fn-obs observe]]
      :cljs [tiltontec.rube.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]])

   #?(:cljs [tiltontec.rube.cells
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.rube.cells :refer :all])

   [tiltontec.rube.evaluate :refer [c-get c-awaken]]
   ))

(def-rmap-slots md-
  name)

(def-rmap-meta-slots md-
  state cz)

(defn md-cell [me slot]
  (slot (:cz (meta me))))

;;; --- md initialization ---

(declare md-awaken)

(defn md-install-cell [me slot c]
  ;; note that c (a misnomer) might not be a Cell
  (cond
    (c-ref? c) (do
                 (#?(:clj alter :cljs swap!) c assoc
                        :slot slot
                        :me me)
                 (rmap-setf [slot me]
                            (when (c-input? c)
                              (c-value c)))
                 true)
    :else (do
            (rmap-setf [slot me] c)
            false)))
  
(defn md-awaken
  "(1) do initial evaluation of all ruled slots
   (2) call observers of all slots"
  [me]

  (c-assert (= :nascent (md-state me)))
  (rmap-meta-setf [:state me] :awakening)
  (doall
   (for [slot (keys @me)]
     (let [c (slot (md-cz me))]
       (cond
         c (do ;(trx :slot-c slot c)
               (c-awaken c))
         :else (do ;(trx :noslot slot (slot @me) me)
                   (observe slot me (slot @me) unbound nil))))))

  (rmap-meta-setf [:state me] :awake)
  me)

(defn md-get [me slot]
  (if-let [c  (md-cell me slot)]
    (c-get c)
    (slot @me)))


