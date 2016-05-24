(ns tiltontec.rube.family-test
  (:require
   #?(:clj [clojure.test :refer :all]
      :cljs [cljs.test
             :refer-macros [deftest is are]])
   #?(:cljs [tiltontec.rube.ut-macros
             :refer-macros [trx prog1]
             :refer [*trx?*]]
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
                     *call-stack* *defer-changes*
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
             :refer-macros [c? c?+ c-reset-next!]
             :refer [c-in c-reset!]]
      :clj [tiltontec.rube.cells :refer :all])

   [tiltontec.rube.evaluate :refer [c-get]]

   [tiltontec.rube.model-base :refer [md-get md-cell]]
   [tiltontec.rube.model :refer [make] :as md]
   #?(:clj [tiltontec.rube.family :refer :all :as fm] 
      :cljs [tiltontec.rube.family
             :refer-macros [mdv! the-kids]
             :refer [fget fget= mdv!] :as fm])
   ))

(deftest fm-0
  (cells-init)
  (let [u (md/make
           :kon (c-in false :slot :kon)
           :kids (c? ;;(trx :kids-run! *depender*)
                     (when (md-get me :kon)
                       (vector
                        (md/make
                         :par me
                         :name :konzo
                         :kzo (c-in 3))))))]
    (is (nil? (:kids @u)))
    (let [kc (md-cell u :kids)
          kon (md-cell u :kon)]
      (c-reset! kon true)
      (is (= 1 (count (:kids @u))))
      (is (fget :konzo u :inside? true))
      )))


(deftest fm-1
  (is (= 4 (+ 2 2)))
  )


(deftest fm-2
  (let [u (md/make
           :name :uni
           :kids (c? (vector
                      (md/make
                       :par me
                       :name :aa)
                      (md/make
                       :par me
                       :name :bb
                       :kids (c? (vector
                                  (md/make
                                   :par me
                                   :name :bba)
                                  
                                  (md/make
                                   :par me
                                   :name :bbb)))))))]
    ;; (is (fget :bba u :inside? true :must? true))
    ;; (is (thrown-with-msg?
    ;;      Exception #"fget-must-failed"
    ;;      (fget :bbax u :inside? true :must? true)))
    ;; (is (nil? (fget :bbax u :inside? true :must? false)))
    (let [bba (fget :bba u :inside? true :must? true)]
      (is bba)
      (is (fm/fget :uni bba :inside? true :up? true))
      (is (fget :aa bba :inside? false :up? true))
      (is (fget :bb bba :inside? true :up? true))
      (is (fget :bbb bba :inside? false :up? true))
      )
    ))

(deftest fm-3
  (let [u (md/make
           :u63 (c? (+ (mdv! :aa :aa42)
                       (mdv! :bb :bb21)))
           :kon (c-in false)
           :kids (c? (remove nil?
                             (vector
                              (md/make
                               :par me
                               :name :aa
                               :aa42 (c? (* 2 (mdv! :bb :bb21)))
                               :aa3 (c-in 3))
                              (when (md-get me :kon)
                                (md/make
                                 :par me
                                 :name :konzo
                                 :kzo (c-in 3)))
                              (md/make
                               :par me
                               :name :bb
                               :bb21 (c? (* 7 (mdv! :aa :aa3))))))))]
    (is (= 63 (md-get u :u63)))
    (is (= 42 (mdv! :aa :aa42 u)))
    (is (= 21 (mdv! :bb :bb21 u)))
    (is (nil? (fget :konzo u :must? false)))
    (c-reset! (md-cell u :kon) true)
    (is (:kon @u))
    (is (md-cell u :kon))
    (is (= 3 (count (:kids @u))))
    (is (fget :konzo u :inside? true))
    ))
    

(deftest fm-3x
  (let [u (md/make
           :u63 (c? (+ (mdv! :aa :aa42)
                       (mdv! :bb :bb21)))
           :kon (c-in false)
           :kids (c? (the-kids
                      (md/make
                       :name :aa
                       :aa42 (c? (* 2 (mdv! :bb :bb21)))
                       :aa3 (c-in 3))
                      (when (md-get me :kon)
                        (md/make
                         :name :konzo
                         :kzo (c-in 3))) 
                      (md/make
                       :name :bb
                       :bb21 (c? (* 7 (mdv! :aa :aa3)))))))]
    (is (= 63 (md-get u :u63)))
    (is (= 42 (mdv! :aa :aa42 u)))
    (is (= 21 (mdv! :bb :bb21 u)))
    (is (nil? (fget :konzo u :must? false)))
    (c-reset! (md-cell u :kon) true)
    (is (:kon @u))
    (is (md-cell u :kon))
    (is (= 3 (count (:kids @u))))
    (is (fget :konzo u :inside? true))
    ))
