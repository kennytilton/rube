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
  (println (str "qx-making " type))
  (let [qx  (when-not (isa? ia-types type ::m.Single)
              (qx-class-new type))]
    (println :got-qx!!!!!!! qx)
    (let [me (apply md/make
                    :type type
                    :qx-me qx
                    initargs)]
      (println :post-mdmake @me
               (:qx-me me))
      (when (:qx-me @me)
        (println (str "qx-mak-initting " type))
        (qx-initialize me)
        (qx-initialize-all me))

      me)))


