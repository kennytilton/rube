(ns tiltontec.qxia.types
  (:require
   [tiltontec.cell.base :refer [ia-types] :as cty]))

(def qx-type-tree
  [::qx.Object ::m.Form ::m.Single ::m.DialogManager
    [::Application ::Mobile]
    [::ml.Abstract
     [::ml.AbstractBox ::ml.HBox ::ml.VBox]]
    [::m.Widget
     ::m.Atom ::m.Image ::m.Label ::m.Button
     ::m.SelectBox ::m.Slider ::m.TextArea ::m.Title
      ::m.ToggleButton ::m.Row ::m.List
      ::m.RadioGroup ::m.RadioButton ::m.Collapsible 
     [::m.Input 
      ::m.NumberField ::m.CheckBox
      [::m.TextField
       ::m.PasswordField]]
     [::m.Composite
      ::m.Carousel ::m.Drawer ::m.Picker
      ::m.Group
      [::m.Page ::m.NavigationPage]
      ]
     ]
   ])


(defn ensure-vec [x]
  (if (coll? x) (vec x) [x]))

#?(:cljs (defn derive-tree [super tree]
           (let [[class & subs] (ensure-vec tree)]
             (when super
               (set! cty/ia-types
                 (derive cty/ia-types class super)))
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
  ;; </script>

;; #?(:cljs (demo-subs))                   
#?(:cljs (derive-tree nil qx-type-tree))

;;     :class js/qx.ui.mobile.container.Carousel
#?(:cljs
   (doseq [ctype [::m.Carousel]]
     (set! cty/ia-types
       (derive cty/ia-types
         ctype ::m.Composite))))
