(ns tiltontec.rube.test
  (:require
	[cljs.test :refer-macros [run-all-tests run-tests]]
	[tiltontec.rube.model]))

(enable-console-print!)

(defn ^:export run []
  (run-all-tests #"tiltontec.rube.model*")	
  (run-tests #"tiltontec.rube.*-test"))
