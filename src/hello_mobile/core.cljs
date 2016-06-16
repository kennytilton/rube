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
   [hello-mobile.random-toys :refer [make-random-toys]]
   ))

(def this-app (atom nil))

(declare make-picker-test make-login make-overview
  make-remembrance  make-css-test)


(defn ^:export appinit [this shower]
  (reset!
   this-app
   (qx-make ::qxty/Mobile
     :qx-me this
     :pager (new js/qx.ui.mobile.page.Manager false)
     :shower shower
     :kids (c?kids
             (make-login)
             (make-overview)
             (make-random-toys)))))


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

    (label "<h4>Or just goof around on this carousel...</>"
      :translateY 24)

    (carousel [:name :carousel
               :css-class "carousel"
               :translateY 48]
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
     #_ ;; this is in wrong place
     (drawer "left" [:name :drawer :css-class "hot"]
          (hbox [] (label "<h2>socks</>"))
          ;;(hbox [] (label "shirts")))
      )))

(defn make-overview []
  (navigation-page ["Overview" "/overview"]
    [:name :oview
     :showButton true
     :buttonText "Random Toys"
     :buttonIcon "qxiacore/mmedia/games.png"
     :showBackButton true
     :backButtonText "Back"
     :listeners {"action" (fn [event me]
                            (routing-get "/randomtoys"))}]
    
    (vbox [:name :greeter
           :greet? (c-in false)]
      
      (qx-make ::qxty/m.Button
        :translateY 48
        :label (c? (if (md-get (qx-par me) :greet?)
                     "Who's there?"
                     "Knock-Knock"))
        :listeners {"tap" (fn [event me]
                            (let [g (fget :greeter me)]
                              (assert g)
                              (md-reset! g :greet?
                                (not (md-get g :greet?)))))})

      (hbox [:name :stuff
             :translateY 72
             :css-class ["notsobig"]]
          (if (md-get (fget :greeter me) :greet?)
            (label "<h1>hello, world</>"
              :css-class "cool"
              :translateX 200
              :translateY 100)

            (image "qxiacore/mmedia/earth-from-moon.jpg"
              ;;:rotation -5
              ;;:scaleX 0.5 :scaleY 0.5
              ;; warning: specifiying the above suppresses css
              ;;:css-class "warning"
              ))))))

;; next guy not in use just now
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
