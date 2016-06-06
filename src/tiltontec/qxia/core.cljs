(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type ia-types]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core :refer [md-get make] :as md]
   [tiltontec.qxia.types :as qxty]
    [tiltontec.qxia.base
    :refer [qx-class-new qx-initialize qx-initialize-all
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
  (md/make :type ::qxty/m.TextField
    :label label))
