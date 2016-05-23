(ns tiltontec.modeller.utility
  (:require [clojure.string :as $]
            #?(:cljs [tiltontec.modeller.ut-macros :as utm
                      :refer-macros [prog1 b-when]]
               :clj  [tiltontec.modeller.ut-macros :as utm
                      :refer :all])))

#?(:cljs
   (set! *print-level* 2)) ;; lose this if we lose recursive data structures

(defn type-of [x] (type x))

(defn set-ify [x]
  (cond
   (nil? x) #{}
   (sequential? x) (set x)
   :else #{x}))

(defn cl-find [sought coll]
  (when-not (nil? sought)
    (some #{sought} coll)))

;; --- refs with maps conveniences -------------------

(defn any-ref? [x]
  (instance? #?(:cljs cljs.core.Atom
                :clj clojure.lang.Ref) x))


(defn rmap-setf [[slot ref] new-value]
  (assert (any-ref? ref))
  (assert (map? @ref))
  (#?(:clj alter :cljs swap!) ref assoc slot new-value)
  new-value)



(defn rmap-meta-setf [[slot ref] new-value]
  (assert (meta ref))
  (alter-meta! ref assoc slot new-value)
  new-value)
;; --- error handling -----------------

(do
  (defmulti err (fn [a1 & args] (fn? a1)))

  (defmethod err true [fn & mas]
    (err (apply fn mas)))

  (defmethod err :default [& bits]
    (throw (#?(:cljs js/Error. :clj Exception.)
            ($/join " " (cons "jz/err>" bits))))))

;; (defn upabc [a b c]
;;   (tiltontec.modeller.ut-macros/pabc2 a))

(defn flz [x]
  (if (isa? (type x) #?(:cljs cljs.core.LazySeq
                        :clj clojure.lang.LazySeq))
    (vec (doall x))
    x))
#_
(flz (map even? [1 2 3]))

(defn wtrx-test [n]
  (tiltontec.modeller.ut-macros/wtrx
   (0 10 "test" n)
   (when (> n 0)
     (wtrx-test (dec n)))))

;; --- deftest support ---------------------
;; These next two are lame because they just
;; look at slots (ignoring models). Use only
;; in tests looking at one model or at least
;; slot names do not duplicate.
;;

(defn slot-users [me slot]
  (set (map :slotq
            (map deref
                 (:callers @(slot @me) #{})))))

(defn slot-useds [me slot]
  (set (map :slot
            (map deref
                 (:useds @(slot @me) #{})))))

;;; --- FIFO Queue -----------------------------

(defn make-fifo-queue []
  (atom []))

(defn fifo-data [q] @q)
(defn fifo-clear [q]
  (swap! q empty))
(defn fifo-empty? [q]
  (empty? @q))
(defn fifo-peek [q]
  (first @q))

(defn fifo-add [q new]
  (swap! q conj new))

(defn fifo-pop [q]
  (when-not (fifo-empty? q)
    (utm/prog1
     (first @q)
     (swap! q subvec 1))))

;;; --- learning curve exercises
;;


(comment
  (loop [[slot v & r]  '(:a 0 :b 1 :c 9)
         acc (transient {})]
    (if (nil? slot)
      (persistent! acc)
      (recur r (assoc! acc
                       slot
                       (cond 
                        (typep v :jz)
                        (merge {:slot slot} v)
                        :else v)))))

  (into (hash-map)
      (map (fn [[k v]] (vector k (inc v)))
           (partition 2 '(:a 0 :b 1 :c 9))))

  (reduce (fn [m [k v]]
          (assoc m k (inc v)))
        (hash-map)
        (partition 2 '(:a 0 :b 1 :c 9))))
