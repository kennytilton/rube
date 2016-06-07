(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type ia-types]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core :refer [md-get make] :as md]
   [tiltontec.qxia.types :as qxty]
    [tiltontec.qxia.base
    :refer [qxme qx-class-new qx-initialize qx-initialize-all
            app-routing]]
   [tiltontec.qxia.widget]
   ))

(defn routing-get [end-point]
  (.executeGet (app-routing) end-point))

(defn image [source & iargs]
  (apply md/make
         :type ::qxty/m.Image
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
                             (println :bingo-val-fn!!!! val)
                             (let [qm (qxme me)
                                   min (.getMinimum qm)
                                   max (.getMaximum qm)
                                   stp (.getStep qm)
                                   emsg (cond
                                          (< val min) "Too low!"
                                          (> val max) "Too high!"
                                          (not (zero? (mod val stp))) "Out of step!")]
                               (println :emsg! emsg)
                               (when emsg
                                 (.setInvalidMessage qm emsg))
                               (nil? emsg))))
         iargs))
