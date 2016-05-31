(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type ia-types]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make] :as md]
   [tiltontec.qxia.base :refer [qx-class-new qx-initialize qx-initialize-all]]
   [tiltontec.qxia.widget]
   ))

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


