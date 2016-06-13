(ns tiltontec.qxia.types
  (:require
   [tiltontec.util.core :refer [ensure-vec]]
   [tiltontec.cell.base :as cty]))

(def qx-type-tree
  [::qx.Object
   ::m.Form ::m.Single ::m.DialogManager ::m.RadioGroup
   ::m.RadioGroupStub
   [::m.MValue ::m.TextField ::m.NumberField ::m.Slider
    ::.ToggleButton ::m.CheckBox ::m.RadioButton
    ::m.SelectBox]
   [::Application ::Mobile]
   [::ml.Abstract
    [::ml.AbstractBox ::ml.HBox ::ml.VBox]]
   [::m.Widget
    ::m.Atom ::m.Image ::m.Label ::m.Button
    ::m.SelectBox ::m.Slider ::m.TextArea ::m.Title
    ::m.ToggleButton ::m.Row ::m.List
    ::m.Collapsible ::m.Html ::m.Canvas
    ::m.Popup ::m.Menu ::m.BusyIndicator
    [::m.Input
     ::m.NumberField ::m.CheckBox ::m.RadioButton
     [::m.TextField
      ::m.PasswordField]]
    [::m.Composite
     ::m.Carousel ::m.Drawer ::m.Picker
     ::m.Group ::m.Row ::m.Scroll
     [::m.Page ::m.NavigationPage]
     ]
    ]
   ])


#?(:cljs (defn derive-tree [super tree]
           (let [[class & subs] (ensure-vec tree)]
             (when super
               (derive class super))
             (doseq [sub subs]
               (derive-tree class sub)))))

#?(:cljs
   (defn dem-subs []
     (let [reg qx.Class.$$registry]
       (println :reg!!!!!!!!!! reg)
       )))

  ;;     for (var name in registry) {
  ;;       if(registry[name].superclass && registry[name].superclass == clazz) {
  ;;         subclasses[name] = registry[name];
  ;;       }
  ;;     }

  ;;     return subclasses;
  ;;   }

#?(:cljs (derive-tree nil qx-type-tree))

;;     :class js/qx.ui.mobile.container.Carousel
;; #?(:cljs
;;    (doseq [ctype [::m.Carousel]]
;;      (set! cty/ia-types
;;        (derive cty/ia-types
;;          ctype ::m.Composite))))
