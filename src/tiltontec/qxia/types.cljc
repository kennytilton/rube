(ns tiltontec.qxia.types
  (:require
   [tiltontec.cell.base :refer [ia-types] :as cty]))

#?(:cljs
   (set! cty/ia-types
        (-> cty/ia-types
            (derive ::Application ::Object)
            (derive ::Mobile ::Application)

            (derive ::ml.Abstract ::Object)
            (derive ::ml.AbstractBox ::ml.Abstract)
            (derive ::ml.HBox ::ml.AbstractBox)
            (derive ::ml.VBox ::ml.AbstractBox)

            (derive ::m.Form ::Object)
            (derive ::m.Single ::Object)
            (derive ::m.Widget ::Object)
            (derive ::m.Composite ::m.Widget)
    
            (derive ::m.Page ::m.Composite)
            (derive ::m.Scroll ::m.Composite)
            (derive ::m.NavigationPage ::m.Page)

            (derive ::m.Atom ::m.Widget)
            (derive  ::m.Image ::m.Widget)
            (derive  ::m.Label ::m.Widget)

            (derive  ::m.Button ::m.Atom)
            (derive  ::m.Input ::m.Widget)
            (derive  ::m.TextField ::m.Input)
            (derive  ::m.PasswordField ::m.TextField))))
