(ns tiltontec.model.core
  (:require
      [clojure.set :refer [difference]]
   #?(:cljs [tiltontec.util.base
             :refer-macros [trx prog1 *trx?* def-rmap-slots]]
      :clj  [tiltontec.util.base
             :refer :all])
   [tiltontec.util.core
    :refer [any-ref? type-of err rmap-setf rmap-meta-setf]]
   #?(:clj [tiltontec.cell.base :refer :all :as cty]
      :cljs [tiltontec.cell.base
             :refer-macros [without-c-dependency]
             :refer [cells-init c-optimized-away? c-formula? c-value c-optimize
                     c-unbound? c-input? ia-type?  ia-type
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
            :refer [ observe]]
      :cljs [tiltontec.cell.observer
             :refer [observe]])


   #?(:cljs [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
      :clj [tiltontec.cell.core :refer :all])

   [tiltontec.cell.evaluate :refer [c-get c-awaken not-to-be]]
   [tiltontec.model.base :refer [md-cell md-install-cell md-awaken]]
   ))

(defn md-name [me]
  (:name @me))

(defn md-get [me slot]
  ;;(trx :md-get slot me)
  (if-let [c  (md-cell me slot)]
    (c-get c)
    (slot @me)))

(defn md-getx [tag me slot]
  (md-get me slot)
  #_
  (wtrx [0 100 (str "md-getx " tag slot (ia-type me))]
    (if-let [c  (md-cell me slot)]
      (c-get c)
      (slot @me))))
(def ^:dynamic *par* nil)

;;; --- accessors ----

(defn md-reset! [me slot new-value]
  (if-let [c  (md-cell me slot)]
    (c-reset! c new-value)
    (do
      ;; (println :meta (meta me))      (println :cz (:cz (meta me)))
      (if (contains? @me slot)
        (err str "change not mediated by cell " slot "/" (ia-type me))
        (err str "change to slot not mediated by cell and map lacks slot" slot)))))
  ;;(rmap-setf [slot me] new-value))))

(defn make [& iargs]
  (cond
    (odd? (count iargs)) (apply make :type iargs)
    :else
    (#?(:clj dosync :cljs do)
     ;;(println (str :md-making (nth iargs 1)))
      
     (let [me (#?(:clj ref :cljs atom)
               (merge {:par *par*}
                      (->> iargs
                           (partition 2)
                           (filter (fn [[slot v]]
                                     (not (= :type slot))))
                           (map (fn [[k v]]
                                  (vector k (if (c-ref? v)
                                              unbound
                                              v))))
                           (into {})))
               :meta (merge {:state :nascent}
                            (->> iargs
                                 (partition 2)
                                 (filter (fn [[slot v]]
                                           (= :type slot)))
                                 (map vec)
                                 (into {}))))]
       (assert (meta me))

       (rmap-meta-setf
        [:cz me]
        (->> iargs
             (partition 2)
             (filter (fn [[slot v]]
                       (md-install-cell me slot v)))
             (map vec)
             (into {})))

       (with-integrity (:awaken me)
         (md-awaken me))
       me))))

;;; --- family ------------------------------------

(def mm-obj #?(:clj Object :cljs js/Object))

(defmethod observe [:kids ::family]
  [_ _ newk oldk _]
  (when-not (= oldk unbound)
    (let [lostks (difference (set oldk)(set newk))]
      (when-not (empty? lostks)
        (doseq [k lostks]
          (not-to-be k))))))

(defn qx-par [me]
  (:par @me))

(defn fget= [seek poss]
  (assert (any-ref? poss))
  (cond
    (fn? seek) (seek poss)
    (keyword? seek)(do
                     (trx nil :fget=sees seek (:name @poss))
                     (= seek (:name @poss)))
    :else (do ;; (trx :fget=-else! seek)
              (= seek poss))))


(defn fget [what where & options]
  (when (and where what)
    (let [options (merge {:me? false
                          , :inside? false
                          , :up? true
                          , :wocd? true ;; without-c-dependency
                          } (apply hash-map options))]
      (binding [*depender* (if (:wocd? options) nil *depender*)]
        (or (and (:me? options)
                 (fget= what where)
                 where)

            (and (:inside? options)
                 (if-let [kids (md-get where :kids)]
                   (do
                     (trx nil :inside-kids!!! (:name @where))
                     (if-let [netkids (remove #{(:skip options)} kids)]
                       (do
                         (some #(fget what %
                                      :me? true
                                      :inside? true
                                      :up? false) netkids))
                       (trx nil :no-net-kids)))
                   (trx nil :inside-no-kids (:name @where))))

            (and (:up? options)
                 (when-let [par (:par @where)]
                   (fget what par
                         :up? true
                         :me? true
                         :skip where
                         :inside? true)))

            (when (:must? options)
              (err :fget-must-failed what where options)))))))

(defn fm! [what where]
  (fget what where :me? false :inside? true :must? true :up? true))

(defmacro mdv! [what slot & [me]]
  (let [me (or me 'me)]
    `(md-get (tiltontec.model.core/fm! ~what ~me) ~slot)))

;; (macroexpand-1 '(mdv! :aa :aa3))

(defmacro the-kids [& tree]
  `(binding [*par* ~'me]
     (remove nil? (flatten (list ~@tree)))))

(defmacro c?kids [& tree]
  `(c? (the-kids ~@tree)))



