(ns tiltontec.model.macros
  (:require 
   [tiltontec.cell.base :refer [ia-type]]))

(defmacro pme [& mas]
  `(println (ia-type ~'me) ~@mas))
