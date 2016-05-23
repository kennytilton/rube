(ns tiltontec.rube.test
  (:require [cljs.test :refer-macros [run-all-tests]]))

(enable-console-print!)

(defn ^:export run []
  (run-all-tests #"tiltontec.rube.*-test"))
