(ns tiltontec.qxia.types
  (:require
   [tiltontec.cell.base :refer [ia-types] :as cty]))

(def qx-type-tree
  [::Object ::m.Form ::m.Single ::m.DialogManager
    [::Application ::Mobile]
    [::ml.Abstract
     [::ml.AbstractBox ::ml.HBox ::ml.VBox]]
    [::mWidget
     [::m.Atom ::m.Image ::m.Label ::m.Button]
     [::m.Input
      [::m.TextField ::m.PasswordField]]
     [::m.Composite
      ::m.Carousel ::m.Drawer ::m.Collapsible ::m.Picker
      [::m.Page ::m.NavigationPage]
      ]
     ]])

(defn ensure-vec [x]
  (if (coll? x) (vec x) [x]))

(defn derive-tree [super tree]
  (let [[class & subs] (ensure-vec tree)]
    (when super
       ;; (println :deriving class :from super)
       (set! cty/ia-types
         (derive cty/ia-types class super)))
     (doseq [sub subs]
       (derive-tree class sub))))

#?(:cljs (derive-tree nil qx-type-tree))

;;     :class js/qx.ui.mobile.container.Carousel
#?(:cljs
   (doseq [ctype [::m.Carousel]]
     (set! cty/ia-types
       (derive cty/ia-types
         ctype ::m.Composite))))
