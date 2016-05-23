(ns tiltontec.modeller.core
  (:require
   [sablono.core :as sab]
   [tiltontec.modeller.components :refer [like-seymore]]
   [tiltontec.modeller.ut-macros]
   [tiltontec.modeller.utility]
   [tiltontec.modeller.utility-test]
   [tiltontec.modeller.cell-types]
   [tiltontec.modeller.observer]
   [tiltontec.modeller.integrity]
   [tiltontec.modeller.evaluate]
   [tiltontec.modeller.cells]
   [tiltontec.modeller.observer-test]
   [tiltontec.modeller.integrity-test]
   [tiltontec.modeller.evaluate-test]
   [tiltontec.modeller.cells-test]
   [tiltontec.modeller.hello-world-test]
   [tiltontec.modeller.model-base]
   [tiltontec.modeller.family]
   [tiltontec.modeller.model]
   [tiltontec.modeller.model-test]
   ;[tiltontec.modeller.kids-test]
   ;[tiltontec.modeller.lazy-cells-test]
   ))


(defonce app-state (atom { :likes 0 }))

(defn render! []
  (.render js/React
           (like-seymore app-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

(render!)
