
(ns tiltontec.rube.kids-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.rube.ut-macros
             :refer-macros [trx prog1 *trx?*]]
      :clj  [tiltontec.rube.ut-macros
             :refer :all])
   [tiltontec.rube.utility :refer [type-of err]]
   #?(:clj [tiltontec.rube.cell-types :refer :all :as cty]
      :cljs [tiltontec.rube.cell-types
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
   #?(:cljs [tiltontec.rube.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.rube.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.rube.observer
            :refer [defobserver fn-obs]]
      :cljs [tiltontec.rube.observer
             :refer-macros [defobserver fn-obs]])

   #?(:cljs [tiltontec.rube.cells
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell make-c-formula]]
      :clj [tiltontec.rube.cells :refer :all])

   [tiltontec.rube.evaluate :refer [c-get c-awaken]]
   [tiltontec.rube.model-base :refer [md-get md-cz md-cell md-name]]
   #?(:clj [tiltontec.rube.family :refer :all :as fm]
      :cljs [tiltontec.rube.family 
             :refer-macros [the-kids mdv!]
             :refer [fm!]
             :as fm])
   [tiltontec.rube.model :refer [make md-reset! ] :as md]
   ))

(deftest k-notq2be
  (let [f (md/make ::fm/family
                   :ee (c-in 2)
                   :kids (c? (the-kids
                              (when (odd? (md-get me :ee))
                                (md/make
                                 :name :yep
                                 :value (c? (do 
                                              (let [par (:par @me)]
                                                (let [ee (md-get par :ee)]
                                                  (* 14 ee))))))))))]
    (is (ia-type? f ::fm/family))
    (is (empty? (md-get f :kids)))
    
    (do
      (md-reset! f :ee 3)
      (is (not (empty? (md-get f :kids))))
      (is (= 42 (mdv! :yep :value f)))
    
      (let [dmw (first (md-get f :kids))]
        (assert (md-ref? dmw))
        (md-reset! f :ee 0)
        (is (empty? (md-get f :kids)))
        (is (nil? @dmw))
        (is (= :dead (:state (meta dmw))))))))

#?(:cljs (do
           (cljs.test/run-tests)
           ))

