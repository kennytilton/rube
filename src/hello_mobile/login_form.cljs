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
   [hello-mobile.dialog-demos :refer [make-dialog-demos]]
   ))

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
      :value "Zoommmmm"
      :placeholder "Just type something"
      :required true
      :requiredInvalidMessage "Password is required")

    (number-field "A 42-ish Quantity"
      ;;:qx-new-args [42]

      :placeholder "something from -42 to 420 divisible by 42"
      ;;:required true
      :minimum -42
      :step 42
      :maximum 420
      ;;:liveUpdate true
      :invalidMessage "NOT Answer to universe"
      :requiredInvalidMessage "Answer to universe is required")


    #_(make-remembrance)

    #_(qx-make ::qxty/m.SelectBox
        :label "How many?"
        :selection (c-in 2)
        :model (qx-data-array ["one" "two" "three"])
        :placeholder "Pick a number, any number"
        :listeners  {"changeSelection"
                     (fn [evt me]
                       (let [jd (js->clj (.getData evt))]
                         (with-integrity (:change)
                           (md-reset! me :selection (jd "index")))))})))


(defn make-remembrance []
  (list
    (qx-make ::qxty/m.CheckBox
      :name :remember-me
      :label "Remember you?"
      :qx-new-args (c? [(md-get me :value)])
      :value (c-in false)
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})

    (qx-make ::qxty/m.ToggleButton
      :name :really
      :label "Really?"
      :visibility (c? (if (mdv! :remember-me :value)
                                  "visible" "excluded"))
      :value (c-in false)
      :qx-new-args (c? [(md-get me :value) "Yes" "Nahh"])
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})

    (qx-make ::qxty/m.Slider
      :name :time-to-remember
      :label "How long to remember?"
      :displayValue "value"
      :value (c-in 10)
      :enabled (c? (and (mdv! :remember-me :value)
                          (mdv! :really :value)))
      :minimum 1 :maximum 30 :step 2
      :listeners  {"changeValue"
                   (fn [evt me]
                     (let [data (.getData evt)
                           jd (js->clj data)]
                       (md-reset! me :value jd)))})

    (text-field "Remember time"
      :value (c?+ [:obs (fn-obs
                          (when-let [q (qxme me)] ;; not at first
                            (.setValue (qxme me) new)))]
               (let [r (mdv! :time-to-remember :value)]
                 (when r (str r " days"))))
      :readOnly true)))
