(ns tiltontec.util.core
  (:require [clojure.string :as $]
            #?(:cljs [tiltontec.util.base :as utm
                      :refer-macros [prog1 b-when wtrx]]
               :clj  [tiltontec.util.base :as utm
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

(defn ia-ref [x]
  (#?(:clj ref :cljs atom) x))

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
;;   (tiltontec.util.base/pabc2 a))

(defn flz [x]
  (if (isa? (type x) #?(:cljs cljs.core.LazySeq
                        :clj clojure.lang.LazySeq))
    (vec (doall x))
    x))
#_
(flz (map even? [1 2 3]))

(defn wtrx-test [n]
  (wtrx
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
  (#?(:clj ref :cljs atom) []))

(defn fifo-data [q] @q)
(defn fifo-clear [q]
  (#?(:clj alter :cljs swap!) q empty))
(defn fifo-empty? [q]
  (empty? @q))
(defn fifo-peek [q]
  (first @q))

(defn fifo-add [q new]
  (#?(:clj alter :cljs swap!) q conj new))

(defn fifo-pop [q]
  (when-not (fifo-empty? q)
    (utm/prog1
     (first @q)
     (#?(:clj alter :cljs swap!) q subvec 1))))

;;; --- detritus ----------------------

(defn ensure-vec [x]
  (if (coll? x) (vec x) [x]))

(defn pln [& r]
  (when (some #{(first r)} []) ;; [:qxme :addk])
    (println (pr-str r))))
