(ns hello-mobile.random-toys
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
                    drawer collapsible group]]))

(declare make-remembrance
  make-picker-test)

(defn make-random-toys []
  (navigation-page ["Random Toys" "/randomtoys"]
    [:showBackButton true
     :backButtonText "Back"]
    (form [][]
      (qx-make ::qxty/m.RadioGroupStub
        :name :fav-css
        :header "How's the weather?"
        :allowEmptySelection true
        :selection (c-in :mild)
        :kids (c? (let [mrb (fn [model & [label]]
                              (println :here-come-rb model label)
                              (qx-make ::qxty/m.RadioButton
                                :model model
                                :name model
                                :qx-new-args [model]
                                :label (or label
                                         (capitalize (name model)))))]
                    (the-kids
                      (mrb :cool "Kinda Kool")
                      (mrb :mild)
                      (mrb :hot))))))
    
    (qx-make ::qxty/m.Row
      :name :row-me
      :label "Voila"
      :css-class (c? (let [rg (fget :fav-css me)]
                       (when-let [css (md-get rg :selection)]
                         [(name css)])))
      :kids (c?kids
              (label "Like this?" :name :row-me-label)))

   (make-remembrance)

   (form [][]
     (qx-make ::qxty/m.SelectBox
       :label "How many?"
       :selection (c-in nil)
       :model (qx-data-array ["one" "two" "three"])
       :placeholder "Pick a number, any number"
       :listeners  {"changeSelection"
                    (fn [evt me]
                      (let [jd (js->clj (.getData evt))]
                        (with-integrity (:change)
                          (md-reset! me :selection (jd "index")))))}))

    (make-picker-test)))


(defn make-remembrance []
  (form [][]
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
                     (md-reset! me :value
                       (js->clj (.getData evt))))})

    (text-field "Remember time"
      :value (c? (let [r (mdv! :time-to-remember :value)]
                   (when r (str r " days"))))
      :readOnly true)))


(defn make-picker-test []
  (vbox [:name :picker-vbox]
     (label (c? (let [myp (fget :my-pick me)]
                 (str "Latest pick " (md-get myp :value)))))
    (qx-make ::qxty/m.Picker
      :name :my-pick
      :height 100
      :width 200
      :visibleItems 3
      :value (c-in "booya")
      :listeners {"changeSelection"
                  (fn [evt me]
                    (let [data (.getData evt)
                          jd (js->clj data)]
                      (md-reset! me :value
                        (get (get jd "item") "title"))))}

      :slot-data (list
                   [{:title "Windows Phone"
                     :subtitle "R.I.P."
                     :image "identica/mmedia/games.png"}
                    {:title "iOS" :subtitle "Version 7.1"}
                    {:title "Android"}]
                   [{:title "Tablet"}
                    {:title "Smartphone"}
                    {:title "Phablet"}]))
    #_(label (c? (let [myp (fget :my-pick me  {:me? false
                          , :inside? false
                          , :up? true
                          , :wocd? true ;; without-c-dependency
                          })]
                 "xxx" #_
                 (str (md-get myp :value)))))))
