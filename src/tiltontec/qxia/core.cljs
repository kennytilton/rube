(ns tiltontec.qxia.core
  (:require
   [tiltontec.cell.base :refer [ia-type]]
   [tiltontec.cell.core
             :refer-macros [c? c?+ c-reset-next! c?once c?n]
             :refer [c-in c-reset! make-cell]]
   [tiltontec.model.base :refer [md-get]]
   [tiltontec.model.core :refer [make] :as md]
   [tiltontec.qxia.base :refer [qx-class-new qx-initialize qx-initialize-all]]
   [tiltontec.qxia.widget]
   ))

  
(defn qx-make [type & initargs]
  (println (str "qx-making " type))

  (let [me (apply md/make
                  :type type
                  :qx-me (qx-class-new type)
                  initargs)]

    (when (md-get me :qx-me)
      (qx-initialize me)
      (qx-initialize-all me))

    me))


