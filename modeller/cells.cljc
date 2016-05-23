(ns tiltontec.modeller.cells
  (:require [tiltontec.modeller.utility :refer []]
            #?(:clj [tiltontec.modeller.cell-types :refer :all :as cty]
               :cljs [tiltontec.modeller.cell-types
                      :refer-macros [without-c-dependency]
                      :refer [c-optimized-away? c-formula? c-value c-optimize
                              c-unbound? c-input? unbound
                              c-model mdead? c-valid? c-useds c-ref? md-ref?
                              c-state +pulse+ c-pulse-observed
                              *call-stack* *defer-changes*
                              c-rule c-me c-value-state c-callers caller-ensure
                              unlink-from-callers *causation*
                              c-slot-name c-synaptic? caller-drop
                              c-pulse c-pulse-last-changed c-ephemeral? c-slot
                              *depender* *not-to-be* 
                              *c-prop-depth* md-slot-owning? c-lazy] :as cty])
            
            [tiltontec.modeller.observer :refer []]
            #?(:clj [tiltontec.modeller.integrity :refer :all]
               :cljs [tiltontec.modeller.integrity
                      :refer-macros [with-integrity]
                      :refer []])
            [tiltontec.modeller.evaluate :refer [c-value-assume]]))

#?(:cljs (set! *print-level* 3))

(defn make-cell [& kvs]
  (let [options (apply hash-map kvs)]
    (#?(:clj ref :cljs atom) (merge {:value unbound
                 :state :nascent
                 :pulse 0
                 :pulse-last-changed 0
                 :pulse-observed 0
                 :callers #{}
                 :lazy false ;; not a predicate (can hold, inter alia, :until-asked)
                 :ephemeral? false
                 :input? true
                 }
                options)
         :meta {:type ::tiltontec.modeller.cell-types/cell})))

(defn make-c-formula [& kvs]
  (let [options (apply hash-map kvs)
        rule (:rule options)]
    (assert rule)
    (assert (fn? rule))
    (#?(:clj ref :cljs atom) (merge {:value unbound
                 :state :nascent ;; s/b :unbound?
                 :pulse 0
                 :pulse-last-changed 0
                 :pulse-observed 0
                 :callers #{}
                 :useds #{}
                 :lazy false
                 :ephemeral? false
                 :optimize true ;; this can also be :when-not-nil
                 :input? false ;; not redundant: can start with rule, continue as input
                 }
                options)
         :meta {:type ::tiltontec.modeller.cell-types/c-formula})))

;;___________________ constructors _______________________________
;; I seem to have created a zillion of these, but I normally
;; use just c-in, c?, and c?n (which starts out as c? and becomes c-in).
;; 

(defmacro c-fn-var [[c] & body]
  `(fn [~c]
     (let [~'me (c-model ~c)
           ~'cache (c-value ~c)]
     ~@body)))

(defmacro c-fn [& body]
  `(c-fn-var (~'slot-c#) ~@body))

(defmacro c? [& body]
  `(make-c-formula
    :code '~body
    :value unbound
    :rule (c-fn ~@body)))

(defmacro c?+ [[& options] & body]
  `(make-c-formula
    ~@options
    :code '~body
    :value unbound
    :rule (c-fn ~@body)))

(defmacro c?+n [& body]
  `(make-c-formula
    :input? true
    :code '~body
    :value unbound
    :rule (c-fn ~@body)))

(defmacro c?n [& body]
  `(make-c-formula
    :code '(without-c-dependency ~@body)
    :input? true
    :value unbound
    :rule (c-fn (without-c-dependency ~@body))))

(defmacro c_?n [& body]
  `(make-c-formula
    :code '(without-c-dependency ~@body)
    :input? true
    :lazy :until-asked
    :value unbound
    :rule (c-fn (without-c-dependency ~@body))))

(defmacro c?n-dbg [& body]
  `(make-c-formula
    :code '(without-c-dependency ~@body)
    :input? true
    :debug true
    :value unbound
    :rule (c-fn (without-c-dependency ~@body))))

(defmacro c?n-until [args & body]
  `(make-c-formula
    :optimize :when-value-t
    :code '~body
    :input? true
    :value unbound
    :rule (c-fn ~@body)
    ~@args))

(defmacro c?once [& body]
  `(make-c-formula
    :code '(without-c-dependency ~@body)
    :input? nil
    :value unbound
    :rule (c-fn (without-c-dependency ~@body))))

(defmacro c_1 [& body]
  `(make-c-formula
    :code '(without-c-dependency ~@body)
    :input? nil
    :lazy true
    :value unbound
    :rule (c-fn (without-c-dependency ~@body))))

(defmacro c?1 [& body]
  `(c?once ~@body))

(defmacro c?dbg [& body]
  `(make-c-formula
    :code '~body
    :value unbound
    :debug true
    :rule (c-fn ~@body)))

(defmacro c?_  [[& options] & body]
  `(make-c-formula
    ~@options
    :code '~body
    :value unbound
    :lazy true
    :rule (c-fn ~@body)))

(defmacro c_? [[& options] & body]
  "Lazy until asked, then eagerly propagating"
  `(make-c-formula
    ~@options
    :code '~body
    :value unbound
    :lazy :until-asked
    :rule (c-fn ~@body)))

(defmacro c_?dbg [& body]
  "Lazy until asked, then eagerly propagating"
  `(make-c-formula
    :code '~body
    :value unbound
    :lazy :until-asked
    :rule (c-fn ~@body)
    :debug true))

;; hhhhack add validation somewhere of lazy option

(defmacro c-formula [[& kvs] & body]
  `(make-c-formula
    :code '~body ;; debug aid
    :value unbound
    :rule (c-fn ~@body)
    ~@keys))

(defn c-in [value & option-kvs]
  (apply make-cell
         (list* :value value
                :input? true
                option-kvs)))

;; --- where change and animation begin -------

(defn c-reset! [c new-value]
  "The moral equivalent of a Common Lisp SETF, and indeed
in the CL version of Cells SETF itself is the change API dunction."
  (assert c)
  (cond
    *defer-changes*
    (throw (#?(:clj Exception. :cljs js/Error.) "c-reset!> change to %s must be deferred by wrapping it in WITH-INTEGRITY"
                       (c-slot c)))
    ;-----------------------------------
    (some #{(c-lazy c)} [:once-asked :always true])
    (c-value-assume c new-value nil)
    ;-------------------------------------------
    :else
    (#?(:clj dosync :cljs do)
     (with-integrity (:change (c-slot c))
       (c-value-assume c new-value nil)))))



(defmacro c-reset-next! [f-c f-new-value]
  "Observers should have side-effects only outside the
cell-mediated model, but it can be useful to have an observer
kick off further change to the model. To achieve this we
allow an observer to explicitly queue a c-reset! for 
execution as soon as the current change is manifested."
  `(cond
     (not *within-integrity*)
     (throw (#?(:clj Exception. :cljs js/Error.) "c-reset-next!> deferred change to %s not under WITH-INTEGRITY supervision."
                        (c-slot ~f-c)))
     ;---------------------------------------------
     :else
     (ufb-add :change
              [:c-reset-next!
               (fn [~'opcode ~'defer-info]
                 (let [c# ~f-c
                       new-value# ~f-new-value]
                   (call-c-reset-next! c# new-value#)))])))

(defn call-c-reset-next! [c new-value]
  (cond
    ;;-----------------------------------
    (some #{(c-lazy c)} [:once-asked :always true])
    (c-value-assume c new-value nil)
    ;;-------------------------------------------
    :else
    (#?(:cljs do :clj dosync)
     (c-value-assume c new-value nil))))

:cells-ok

