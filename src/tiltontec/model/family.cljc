(ns tiltontec.model.family
  (:require
      [clojure.set :refer [difference]]
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1 *trx?* def-rmap-slots]]
      :clj  [tiltontec.util.base
             :refer :all])

   [tiltontec.util.core
    :refer [any-ref? type-of err rmap-setf rmap-meta-setf flz]]
   #?(:clj [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
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
   #?(:cljs [tiltontec.cell.integrity
             :refer-macros [with-integrity]]
      :clj [tiltontec.cell.integrity :refer [with-integrity]])
   #?(:clj [tiltontec.cell.observer
            :refer [defobserver fn-obs observe]]
      :cljs [tiltontec.cell.observer
             :refer-macros [defobserver fn-obs]
             :refer [observe]])

   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.cell.core :refer :all])

   [tiltontec.cell.evaluate :refer [c-get c-awaken not-to-be]]
   [tiltontec.model.base :refer [md-cell md-get]]
   ))

(derive cty/ia-types ::family ::cty/model)

(def ^:dynamic *par* nil)

(defn fget= [seek poss]
  (assert (any-ref? poss))
  (cond
    (fn? seek) (seek poss)
    (keyword? seek)(do
                     ;; (trx :fget=!!! seek @poss)
                     (= seek (:name @poss)))
    :else (do ;; (trx :fget=-else! seek)
              (= seek poss))))

(defn fget [what where & options]
  ;;(trx :fget-entry what where)
  (when (and where what)
    (let [options (merge {:me? false
                          , :inside? false
                          , :up? true
                          , :wocd? true ;; without-c-dependency
                          } (apply hash-map options))]
      ;;(trx :fget-beef what (md-name where) options)
      (binding [*depender* (if (:wocd? options) nil *depender*)]
        (or (and (:me? options)
                 (fget= what where)
                 where)

            (and (:inside? options)
                 (if-let [kids (md-get where :kids)]
                   (do
                     ;;(trx :fget-inside (:skip options)(doall (map md-name kids)))
                     (if-let [netkids (remove #{(:skip options)} kids)]
                       (do 
                         ;;(trx netkids!!! netkids)
                         (some #(fget what %
                                      :me? true
                                      :inside? true
                                      :up? false) netkids))
                       (trx :no-net-kids)))
                   (trx nil :inside-no-kids @where)))

            (and (:up? options)
                 (when-let [par (:par @where)]
                   ;; (trx :fget-up (:name @par))
                   (fget what par
                         :up? true
                         :me? true
                         :skip where
                         :inside? true)))

            (when (:must? options)
              (err :fget-must-failed what where options)))))))

(defn fm! [what where]
  (fget what where :me? false :inside? true :must? true :up? true))

#_ ;; nope
(defmacro mdv! [what slot & me]
  (if (empty? me)
    `(md-get (fm! ~what ~'me) ~slot)
    `(md-get (fm! ~what ~(first me)) ~slot)))

(defmacro mdv! [what slot & [me]]
  (let [me (or me 'me)]
    `(md-get (fm! ~what ~me) ~slot)))

;; (macroexpand-1 '(mdv! :aa :aa3))

(defmacro the-kids [& tree]
  `(binding [*par* ~'me]
     (remove nil? (flatten (list ~@tree)))))

(defmacro c?kids [& tree]
  `(c? (the-kids ~@tree)))

(def mm-obj #?(:clj Object :cljs js/Object))

(defmethod observe [:kids ::family]
;;(defobserver :kids  [::family]
  [_ _ newk oldk _]
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          (not-to-be k))))))

:family-ok
