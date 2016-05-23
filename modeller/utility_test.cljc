(ns tiltontec.modeller.utility-test
  (:require #?(:cljs [cljs.test
                      :refer-macros [deftest is are run-all-tests]]
               :clj [clojure.test :refer :all])
            [clojure.set :as cset :refer [difference]]
            
            #?(:cljs [tiltontec.modeller.ut-macros :as utm
                      :refer [*trxdepth*]
                      :refer-macros [wtrx trx prog1 b-when unless
                                     def-rmap-slots]]
               :clj [tiltontec.modeller.ut-macros :as utm
                     :refer :all])

             #?(:cljs [tiltontec.modeller.utility
                      :refer [cl-find set-ify any-ref? err
                              make-fifo-queue fifo-empty? fifo-peek fifo-pop
                              fifo-data fifo-add rmap-setf
                              wtrx-test]
                      :as ut]
               :clj [tiltontec.modeller.utility :as ut])))

;; #?(:cljs (set! *print-level* 3))

#_
(deftest fake-cl
  (is (= 42 (utm/prog1 42 43 44)))
  (is (= 42 (utm/b-when x (+ 21 21)
                    42 x)))
  (is (nil? (utm/b-when x false
                    43 42)))
  (are [lst] (= 42 (cl-find 42 lst))
       '(41 42 43)
       '(42 43 44)
       '(40 41 42))

  (is (= 42 (utm/unless (= 2 3) 3 42)))
  (is (nil? (utm/unless (= 2 2) 3 42))))


(deftest no-set
  (is (do ;;(trx :hi-mom!!!!!!!!!!!!!!!!!!!!!!)
          (= #{42} (cset/difference #{43 42} #{43})))))


(deftest setify
    ;;(is (= #{1 2 3} (set-ify [1 1 2 2 3 3])))
    (is (= #{1 2 3} (set-ify (list 1 1 2 2 3 3))))
    (is (= #{} (set-ify nil)))
    (is (= #{42} (set-ify 42)))
    (is (= #{"bob"} (set-ify "bob")))
    (is (= #{{:a 13}} (set-ify {:a 13})))
  (is (= #{42}
           (cset/difference (set-ify [1 2 42])
                       (set-ify (list 1 2))))))


(def-rmap-slots jj- boom)


(deftest test-rmap
    (let [x (atom {:value 0 :boom 42})]
      (is (= 42 (jj-boom x)))
      (is (= 0 (:value @x)))
      (do (rmap-setf [:value x] 42))
      (trx nil :xxx x @x (:value @x))
      (is (= 42 (:value @x)))
      (is (let [j (do (rmap-setf [:value x] 43))]
                                        ;(trx nil :xxx x @x (:value @x))          
                                        ;(trx nil :j j (type j))
            (= 43 j)))
      (is (= 44 (do (rmap-setf [:value x] 44))))
      ))


(deftest err-handling
    (is (thrown? #?(:cljs js/Error :clj Exception)
                 (err "boom")))
    (is (thrown-with-msg?
         #?(:cljs js/Error :clj Exception)
         #"oom"
         (err "boom")))
    (is (thrown-with-msg?
         #?(:cljs js/Error :clj Exception)
         #"Hi mom"
         (err str "Hi " 'mom)))
    (is (any-ref? (atom 42)))
    (are [x] (not (any-ref? x))
      nil
      42
      [])
    (is (= "...... cool: 1, 2, 3\n:bingo\n"
           (with-out-str
             (binding [*trxdepth* 5]
               (wtrx (0 100 "cool" 1 2 3)
                     (println :bingo))))))
    (is (= ". test: 3\n.. test: 2\n... test: 1\n.... test: 0\n"
           (with-out-str
             (wtrx-test 3))))
    )



(deftest fifo-build
    (let [q (make-fifo-queue)]
      (is (fifo-empty? q))
      (is (nil? (fifo-peek q)))
      (is (nil? (fifo-pop q)))
      (is (empty? (fifo-data q)))
      (do
       (fifo-add q 1)
       (is (not (fifo-empty? q)))
       (is (= 1 (fifo-peek q)))
       (is (= 1 (fifo-pop q)))
       (is (fifo-empty? q)))
      (do
       (fifo-add q 1)
       (fifo-add q 2)
       (is (not (fifo-empty? q)))
       (is (= 1 (fifo-peek q)))
       (is (= 1 (fifo-pop q)))
       (is (= 2 (fifo-pop q)))
       (is (fifo-empty? q)))))


(deftest fifo-build-test
    (let [q (make-fifo-queue)]
      (is (fifo-empty? q))
      (is (nil? (fifo-peek q)))
      (is (nil? (fifo-pop q)))
      (is (empty? (fifo-data q)))
      (do
       (fifo-add q 1)
       (is (not (fifo-empty? q)))
       (is (= 1 (fifo-peek q)))
       (is (= 1 (fifo-pop q)))
       (is (fifo-empty? q)))
      (do
       (fifo-add q 1)
       (fifo-add q 2)
       (is (not (fifo-empty? q)))
       (is (= 1 (fifo-peek q)))
       (is (= 1 (fifo-pop q)))
       (is (= 2 (fifo-pop q)))
       (is (fifo-empty? q)))))

#?(:cljs (do (cljs.test/run-tests)
           ))

