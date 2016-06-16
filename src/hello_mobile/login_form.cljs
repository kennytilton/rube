(ns hello-mobile.login-form
  (:require
   [clojure.string :refer [capitalize]]
   [tiltontec.util.core :refer [pln]]
   [tiltontec.cell.base
    :refer [ia-type unbound cells-reset]
    :as cty]
   [tiltontec.cell.observer
    :refer-macros [fn-obs]
    :refer [observe]]
   [tiltontec.cell.integrity :refer-macros [with-integrity]]
   [tiltontec.cell.core
    :refer-macros [c? c?+ c-reset-next! c?once c?n]
    :refer [c-in c-reset! make-cell]]
   [tiltontec.model.core
    :refer-macros [the-kids c?kids mdv!]
    :refer [md-get md-reset! fm! fget qx-par] :as md]
   [tiltontec.qxia.types :as qxty]
   [tiltontec.qxia.base :refer [qxme qx-data-array]]
   [tiltontec.qxia.core
    :refer [label image button routing-get
            text-field number-field qx-make] :as qx]
   [tiltontec.qxia.macros
    :refer-macros [hbox vbox navigation-page form carousel
                    drawer collapsible group]]
   [hello-mobile.dialog-demos :refer [make-dialog-demos]]))

(defn make-login-form []
  (form [][:name :login]
    (text-field "Username"
      :name :u-name
      :value (c-in "KennY")
      :placeholder "Just type something"
      :required true
      :requiredInvalidMessage "Please share your user name")

    (qx-make ::qxty/m.PasswordField
      :name :p-word
      :label "Password"
      :value (c-in "xyz")
      :placeholder "Just type something"
      :required true
      :requiredInvalidMessage "Password is required")

    (number-field "A 42-ish Quantity"
      :placeholder "something from -42 to 420 divisible by 42"
      ;;:required true
      :minimum -42
      :step 42
      :maximum 420
      :invalidMessage "NOT Answer to universe"
      :requiredInvalidMessage "Answer to universe is required")))


