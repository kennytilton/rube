(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type ia-type?]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core :refer [*par* md-get make] :as md]
   [tiltontec.qxia.types :as qxty]
    [tiltontec.qxia.base
    :refer [qxme qx-class-new qx-initialize qx-initialize-all
            app-routing]]
   [tiltontec.qxia.widget]
   ))

(defn routing-get [end-point]
  (let [rtg (app-routing)]
    (assert rtg)
    (.executeGet rtg end-point)))

(defn qx-make [type & iargs]
  (assert (isa? type ::qxty/qx.Object)
    (str "First argument to qx-make " type
      " is not a descendant of qx.Object"))

  (assert (even? (count iargs))
    (str "arglist after type " type " is not of even length: "
      iargs))

  (cond 
    (isa? type ::qxty/m.Single)
    (do
      (assert (ia-type? *par* ::qxty/m.NavigationPage)
        (str "Forms' m.Singles must be kids of NavigationPages, not "
          (ia-type *par*)))))

  (apply md/make :type type iargs))

(defn image [source & iargs]
  (apply qx-make
    ::qxty/m.Image
    :source source
    iargs))


(defn button [label-icon & iargs]
  (apply md/make :type ::qxty/m.Button
    :qx-new-args (if (coll? label-icon)
                   label-icon [label-icon])
    iargs))

(defn text-field [label & iargs]
  (apply md/make :type ::qxty/m.TextField
    :label label
    iargs))

(defn number-field [label & iargs]
  (apply md/make ::qxty/m.NumberField
         :label label
         :validator-fn (c? (fn [val]
                             (let [qm (qxme me)
                                   min (.getMinimum qm)
                                   max (.getMaximum qm)
                                   stp (.getStep qm)
                                   emsg (cond
                                          (< val min) "Too low!"
                                          (> val max) "Too high!"
                                          (not (zero? (mod val stp))) "Out of step!")]
                               (when emsg
                                 (.setInvalidMessage qm emsg))
                               (nil? emsg))))
         iargs))

(defn label [value & iargs]
  (apply md/make
    :type ::qxty/m.Label
    :value value
    iargs))

