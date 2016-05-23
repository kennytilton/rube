(ns tiltontec.modeller.components
  (:require [sablono.core :as sab]
            ))

(defn like-seymore [data]
  (sab/html [:div
             [:h1 "Seymore's popularity is " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Two Thumbs up"]]]))
