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
     ~@top-args
     :kids (tiltontec.model.family/c?kids ~@kids)))

(defmacro form [[& top-args][& form-args] & kids]
  `(tiltontec.qxia.core/qx-make
    :tiltontec.qxia.types/m.Single
    ~@top-args
    :kids (tiltontec.model.family/c?kids
            (tiltontec.qxia.core/qx-make
              :tiltontec.qxia.types/m.Form
              ~@form-args
              :kids (tiltontec.model.family/c?kids ~@kids)))))

(defmacro carousel  [[& top-args] & kids]
  `(tiltontec.qxia.core/qx-make
    :tiltontec.qxia.types/m.Carousel
    ;; :class js/qx.ui.mobile.container.Carousel
    ~@top-args
    :kids (tiltontec.model.family/c?kids ~@kids)))

(defmacro drawer  [orientation [& top-args] & kids]
  `(tiltontec.qxia.core/qx-make
    :tiltontec.qxia.types/m.Composite
    :class js/qx.ui.mobile.container.Drawer
    :qx-new-args [tiltontec.model.family/*par*]
    :orientation ~orientation
    ~@top-args
    :kids (tiltontec.model.family/c?kids ~@kids)))

(defmacro collapsible  [title [& top-args] & kids]
  `(tiltontec.qxia.core/qx-make
    :tiltontec.qxia.types/m.Composite
    :class js/qx.ui.mobile.container.Collapsible
    :qx-new-args [~title]
    ~@top-args
    :kids (tiltontec.model.family/c?kids ~@kids)))

