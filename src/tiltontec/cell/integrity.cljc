(ns tiltontec.cell.integrity
  (:require #?(:cljs [tiltontec.util.base
                      :refer-macros [wtrx trx prog1]]
               :clj  [tiltontec.util.base
                      :refer :all])
            [tiltontec.util.core
             :refer [ensure-vec err pln fifo-add fifo-peek fifo-pop cl-find]]
            #?(:cljs [tiltontec.cell.base
                      :refer-macros [un-stopped]
                      :refer [+pulse+ c-pulse c-optimized-away?
                              +client-q-handler+ c-stopped
                              *within-integrity* *defer-changes*
                              *depender* caller-ensure]]
               :clj  [tiltontec.cell.base :refer :all])))


;; --- the pulse ------------------------------

#?(:cljs (set! *print-level* 3))

(def ^:dynamic *one-pulse?* false)

(def ^:dynamic *dp-log* false)

(defn data-pulse-next
  ([] (data-pulse-next :anon))
  ([pulse-info]
   (when-not *one-pulse?*
     (when *dp-log*
       (trx "dp-next> " (inc @+pulse+) pulse-info))
     (#?(:clj alter :cljs swap!) +pulse+ inc)))) ;; hhack try as commute

(defn c-current? [c]
  (= (c-pulse c) @+pulse+))

(defn c-pulse-update [c key]
  (when-not (c-optimized-away? c)
    (assert (>= @+pulse+ (c-pulse c)))
    (#?(:clj alter :cljs swap!) c assoc :pulse @+pulse+)))

;; --- ufb utils ----------------------------

(def +ufb-opcodes+ [:tell-dependents
                        :awaken
                        :client
                        :ephemeral-reset
                        :change])

(def unfin-biz
  ;; no nested finbiz allowed as of now, so just
  ;; build it and in use fill the queues, ufb -do them, and
  ;; ensure they are empty before continuing.
  (into {} (for [i +ufb-opcodes+]
             [i (#?(:cljs atom :clj ref) [])])))

(defn ufb-queue [opcode]
  (or (opcode unfin-biz)
      (err (str "ufb-queue> opcode unknown: " opcode))))

(defn ufb-queue-ensure [opcode]
  "vestigial"
  (ufb-queue opcode))

(defn ufb-add [opcode continuation]
  (fifo-add (ufb-queue-ensure opcode) continuation))

(defn ufb-assert-q-empty [opcode]
  (if-let [uqp (fifo-peek (ufb-queue-ensure opcode))]
    (do
      (err (str "ufb queue %s not empty, viz %s"
           opcode uqp)))
    true))

;; --- the ufb and integrity beef ----------------------
;;    proper ordering of state propagation


(def ^:dynamic *ufb-do-q* nil) ;; debug aid

(defn ufb-do
  ([opcode]
   (ufb-do (ufb-queue opcode) opcode))

  ([q opcode]
   (when-let [[defer-info task] (fifo-pop q)]
     (trx nil :ufb-do-yep defer-info task)
     (task opcode defer-info)
     (recur q opcode))))

(defn finish-business []
  (un-stopped
    (loop [tag :tell-dependents]
      (case tag
        :tell-dependents
        (do (ufb-do :tell-dependents)
            (ufb-do :awaken)

            (recur
              (if (fifo-peek (ufb-queue-ensure :tell-dependents))
                :tell-dependents
                :handle-clients)))

        :handle-clients
        (do
          (pln :handle-clients!!!!!)
          (when-let [clientq (ufb-queue :client)]
            (if-let [cqh @+client-q-handler+]
              (cqh clientq)
              (ufb-do clientq :client))

            (recur
              (if (fifo-peek (ufb-queue :client))
                (do (pln :re-handling-clients!!!!)
                    :handle-clients)
                :ephemeral-reset))))

        :ephemeral-reset
        (do (ufb-do :ephemeral-reset)
            (recur :deferred-state-change))

        :deferred-state-change
        (when-let [[defer-info task-fn] (fifo-pop (ufb-queue :change))]
          (data-pulse-next :def-state-chg)
          (task-fn :change defer-info)
          (recur :tell-dependents))))))

(defmacro with-integrity [[opcode info] & body]
  `(call-with-integrity
    ~opcode
    ~info
    (fn [~'opcode ~'defer-info]
      ~@body)))

(defmacro with-cc [id &body body]
  `(with-integrity (:change ~id)
     ~@body))

(defmacro without-integrity [& body]
  `(binding
       [*within-integrity* false
        *defer-changes* false
        *call-stack* '()]
     ~@body))

(defn call-with-integrity [opcode defer-info action]
  (when opcode
    (assert (cl-find opcode +ufb-opcodes+)
            (str "Invalid opcode for with-integrity: %s. Allowed values: %s"
                    opcode +ufb-opcodes+)))
  (do ;; wtrx (0 100 "cwi-begin" opcode *within-integrity*)
    (un-stopped
     (#?(:cljs do :clj dosync)
      (cond
        (c-stopped) (println :cwi-sees-stop!!!!!!!!!!!)

        *within-integrity*
        (if opcode
          (prog1
           :deferred-to-ufb-1
           ;; SETF is supposed to return the value being installed
           ;; in the place, but if the SETF is deferred we return
           ;; something that will help someone who tries to use
           ;; the setf'ed value figure out what is going on:
           (pln :cwi :defers opcode (first (ensure-vec defer-info)))
           (ufb-add opcode [defer-info action]))

          ;; thus by not supplying an opcode one can get something
          ;; executed immediately, potentially breaking data integrity
          ;; but signifying by having coded the with-integrity macro
          ;; that one is aware of this.
          ;;
          ;; If you have read this comment.
          ;;
          (action opcode defer-info))

        :else (binding [*within-integrity* true
                        *defer-changes* false]
                (when (or (zero? @+pulse+)
                          (= opcode :change))
                  (data-pulse-next :cwi))
                (prog1
                 (action opcode defer-info)
;;(println :finbiz!!!!!!!)
                 (finish-business)
                 (ufb-assert-q-empty :tell-dependents)
                 (ufb-assert-q-empty :change))))))))



:integrity-ok
