(ns tiltontec.qxia.macros)

(defmacro hbox [[& hbox-args] & kids]
  `(tiltontec.qxia.core/qx-make
     :tiltontec.qxia.types/m.Composite
     :layout (new js/qx.ui.mobile.layout.HBox)
    ~@hbox-args
    :kids (tiltontec.model.family/c?kids ~@kids)))


(defmacro vbox [[& hbox-args] & kids]
  `(tiltontec.qxia.core/qx-make
     :tiltontec.qxia.types/m.Composite
     :layout (new js/qx.ui.mobile.layout.VBox)
    ~@hbox-args
    :kids (tiltontec.model.family/c?kids ~@kids)))

(defmacro navigation-page [[title end-point] [& top-args] & kids]
  `(tiltontec.qxia.core/qx-make
     :tiltontec.qxia.types/m.NavigationPage
     :end-point ~end-point
     :title ~title
     :kids (tiltontec.model.family/c?kids ~@kids)))
