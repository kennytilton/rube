(ns hello-mobile.core
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
   [hello-mobile.login-form :refer [make-login-form]]
   ))

(def this-app (atom nil))

(declare make-picker-test make-login make-overview
  make-remembrance  make-css-test)

(defn ^:export appinit [this pager shower]
  (reset!
   this-app
   (qx-make ::qxty/Mobile
     :qx-me this
     :pager pager
     :shower shower
     :kids (c?kids
             (make-login)
             (make-overview)))))


(defn make-login []
  (navigation-page ["Login" "/"][]
    (make-login-form)

    (button "Login"
      :listeners {"tap"
                  #(let [login (qxme (fm! :login me))
                         vmgr (.getValidationManager login)]
                     (assert vmgr)
                     (when-let [ok (.validate login)]
                       (routing-get "/overview")))})

    (qx-make ::qxty/m.Row
      :name :row-me
      :label "Voila"
      :css-class (c? (let [rg (fget :fav-css me)]
                       (when-let [css (md-get rg :selection)]
                         [(name css)])))
      :kids (c?kids
              (label "Hi Mom" :name :row-me-label)))

    (list ;; no problem if nested list -- the-kids flattens

      (make-picker-test)

      (carousel [:name :carousel
                 :css-class "carousel"]
        (make-dialog-demos)

        (group [:showBorder true]
          (label "<h4>Tell me a story.</>")
          (qx-make ::qxty/m.TextArea
            :label "Tell me a story."
            :placeholder "Your story here."
            :maxLength 300
            :value (c-in nil)
            :listeners  {"changeValue"
                         (fn [evt me]
                           (let [data (.getData evt)
                                 jd (js->clj data)]
                             (md-reset! me :value jd)))}))
        (group [:showBorder true]
          (collapsible "Click for a surprise" []
            (label "Surprise."))))

      ;; bottom drawers do not work yet
      #_(drawer "bottom" [:name :drawer :css-class "hot"]
          (hbox [] (label "socks"))
          (hbox [] (label "shirts")))
      )))

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


(defn make-overview []
  (navigation-page ["Overview" "/overview"]
    [:name :oview
     :showButton true
     :buttonText (c? (if (md-get me :greet?)
                       "Who's there?"
                       "Knock-Knock"))
     :buttonIcon "identica/mmedia/games.png"
     :showBackButton true
     :backButtonText "Back"
     :listeners
     {"action" (fn [event me]
                  (md-reset! me :greet? (not (md-get me :greet?))))}
     :greet? (c-in false)
     ]
    (hbox [:name :stuff]
      (if (md-get (qx-par me) :greet?)
        (vbox [:css-class "cool"]
          (label "Hello")
          (label "World"))

        (image "identica/mmedia/earth-from-moon.jpg"
          ;;:rotation -5
          ;;:scaleX 0.5 :scaleY 0.5
          ;; warning: specifiying the above suppresses css
          :css-class "warning")))))

(defn make-css-test []
  (hbox []
    (label "Hello cool222"
      :flex 0
      :css-class "cool")
    (vbox []
      (label "world 2!"
        :flex 3
        :css-class ["cool" "coolfont"])
      (label "world 3!"
        :flex 3
        :css-class ["cool" "coolfont"]))))
