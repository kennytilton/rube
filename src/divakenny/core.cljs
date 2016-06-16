(ns divakenny.core
  (:require
   [tiltontec.model.core
    :refer-macros [c?kids]]
   [tiltontec.qxia.types :as qxty]
   [tiltontec.qxia.core
    :refer [label qx-make] ]
   [tiltontec.qxia.macros
    :refer-macros [navigation-page]]))

(defn ^:export appinit [this shower]
  (qx-make ::qxty/Mobile
    :qx-me this
    :pager (new js/qx.ui.mobile.page.Manager false)
    :shower shower
    :kids (c?kids
            (navigation-page ["Login" "/"][]
              (label "<h1>Hi, Mom!</h>")))))
