(ns tiltontec.model.macros
  (:require 
   [tiltontec.cell.base :refer [ia-type]]))

(defmacro pme [& mas]
  `(when false ;;  (= :login (:name (deref ~'me)))
     (println (ia-type ~'me)
       (:name (deref ~'me)) ~@mas)))
