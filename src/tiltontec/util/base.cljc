(ns tiltontec.util.base
  (:require [clojure.string :as $]))

#?(:cljs (enable-console-print!))

;; ---- debug print statement hacks ---------------------

(def ^:dynamic *trx?* true)

#_
(alter-var-root #'*trx?* not)

(def ^:dynamic *trc-ensure* nil)
(def ^:dynamic *trx-path-id* nil)
(def ^:dynamic *trxdepth* 0)
(def last-trc (atom 0)) ;; s/b universal time

(defn call-trc$ [s bits]
  (str s ": " ($/join ", " bits)))

(defn call-trc [s & os]
  ;; (break) ;; uncomment to escape loop
  (when *trx?*
    (when s
      (let [path (apply str (repeat *trxdepth* "."))]
        (println path (call-trc$ s os))))))

(defmacro trx [label & vals]
  `(call-trc ~(when (not (nil? label))
                (str label))
             ~@vals))

(defmacro wtrx [[lo hi & trxargs] & body]
  `(binding [*trxdepth* (inc *trxdepth*)]
     (cond
       (<= ~lo *trxdepth* ~hi)
       (trx ~@trxargs)
       (> *trxdepth* ~hi)
       (throw (#?(:cljs js/Error. :clj Exception.)
               (str
                "wtrx exceeded max depth " ~hi ":"
                (call-trc$ '~(first trxargs)
                           (list ~@(rest trxargs)))))))
     ~@body))

(defmacro prog1 [& body]
  `(let [result# ~(first body)]
     ~@(rest body)
     result#))

(defmacro b-when [var form & body]
  `(when-let [~var ~form]
     ~@body))

(defmacro unless [form & body]
  `(when-not ~form
     ~@body))

;; --- easy access to maps in refs ----

(defmacro def-rmap-slots [reader-prefix & slots]
  `(do
     ~@(map (fn [slot#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   slot#))
                 [~'ref]
                 (~(keyword slot#) @~'ref))) slots)))

(defmacro def-rmap-meta-slots [reader-prefix & slots]
  `(do
     ~@(map (fn [slot#]
              `(defn ~(symbol (str (or reader-prefix "")
                                   slot#))
                 [~'ref]
                 (~(keyword slot#) (meta ~'ref)))) slots)))
