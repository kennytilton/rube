(ns divakenny.core
  (:require
   [tiltontec.model.core
    :refer-macros [c?kids]]
   [tiltontec.qxia.types :as qxty]
   
   [tiltontec.qxia.base
    :refer [qxia-type-to-qx-class] ]
   [tiltontec.qxia.core
    :refer [label qx-make] ]
   [tiltontec.qxia.macros
    :refer-macros [navigation-page]]))

#_(defmethod qxia-type-to-qx-class ::qxty/m.NavigationPage [type]
   js/divakennyqx.NaviBack)

(defn ^:export divakenny [this shower]
  (qx-make ::qxty/Mobile
    :qx-me this
    :pager (new js/qx.ui.mobile.page.Manager false)
    :shower shower
    :kids (c?kids
            (navigation-page ["Login" "/"][]
              (label "<h1>Hi, Mom!</h>")))))
