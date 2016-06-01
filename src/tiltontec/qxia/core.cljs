(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type ia-types]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make] :as md]
   [tiltontec.qxia.types :as qxty]
    [tiltontec.qxia.base
    :refer [qx-class-new qx-initialize qx-initialize-all
            app-routing]]
   [tiltontec.qxia.widget]
   ))

(defn routing-get [end-point]
  (.executeGet (app-routing)))

(defn qx-make [type & initargs]
  ;(println (str "qx-making " type))
  (let [qx-map (apply hash-map initargs)
        qx (qx-class-new type qx-map)] 
    ;; note that the Single renderer gets back nil 
    ;; then constructs in qx-initialize
    (let [me (apply md/make
                    :type type
                    :qx-me qx
                    initargs)]
      (qx-initialize me)
      (qx-initialize-all me)
      me)))

(defn label [value & iargs]
  (apply qx-make
         ::qxty/m.Label
         :value value
         iargs))

(defn image [source & iargs]
  (apply qx-make
         ::qxty/m.Image
         :source source
         iargs))

(defn button [label-icon & iargs]
  (apply qx-make ::qxty/m.Button
    :qx-new-args (if (coll? label-icon)
                   label-icon [label-icon])
    iargs))

