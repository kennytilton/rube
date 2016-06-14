(ns hello-mobile.dialog-demos
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
   ))

(defn mood-face [me]

  ;; mood itself could have been passed in
  ;; but this demonstrates that dependency is established
  ;; even though md-get is inside a function...

  (let [mood (md-get (:par @me) :mood)]
    (fn [me]
      (let [ctx (.getContext2d (qxme me))]
        (.clearRect ctx 0 0 300 300)

        (aset ctx "strokeStyle"
          (case mood
            :happy "#FF0"
            :sad "#F00"
            :whatever "#000"))

        (aset ctx "lineWidth" 3)

        (.beginPath ctx)
        (.arc ctx 75 85 50 0 (* 2 Math.PI)  true)
        (case mood
          :sad (do
                 (.moveTo ctx 60 110)
                 (.arc ctx 75 110 15 Math.PI 0 false))
          :whatever (do
                      (.moveTo ctx 55 110)
                      (.lineTo ctx 95 110))

          :happy (do
                   (.moveTo ctx 110 85)
                   (.arc ctx 75 85 35 0 Math.PI false)))

        (.moveTo ctx 65 75)
        (.arc ctx 60 75 5 0 (* 2 Math.PI) true)
        (.moveTo ctx 95 75)
        (.arc ctx 90 75 5 0 (* 2 Math.PI) true)
        (.stroke ctx)))))

(defn make-dialog-demos[]
  (vbox []
    (group [:showBorder true
            :mood (c-in :whatever)]
      (qx-make ::qxty/m.Html
        :css-class "face-label"
        :html (c? (let [m (md-get (:par @me) :mood)]
                    (case m
                      :happy "<h1>Hi mom!</>"
                      :sad "<i>Uh-oh</>"
                      "<h3>hmmmm...</>"))))


      (qx-make ::qxty/m.Canvas
        :name :picasso
        :width 175 :height 150
        ;;:mood (c-in :happy)
        :css-class (c? (case (md-get (:par @me) :mood)
                         :sad "cool"
                         :happy "hot"
                         :whatever "mild"))
        :drawing (c? (mood-face me))
        :listeners {"click"
                    (fn [e me]
                      (md-reset! (:par @me) :mood
                        (case (md-get (:par @me) :mood)
                          :sad :happy
                          :happy :whatever
                          :whatever :sad)))})

     (label "(Hint: click my face)")

    (group [:name :dlgz
            :showBorder true
            :translateY 18
            :pop-fn (fn [anchor]
                      ;; this is tricky, cells-wise. We want this popup and its kids
                      ;; immediately, not when the integrity engine gets around to it.
                      ;; We know this is a standalone thingy with no dependencies, so
                      ;; we tell the intergity engine to Just Do It(tm) by not 
                      ;; passing an opcode that would set its priority.
                      ;; Hmmm. Perhaps we should have a :just-do-it opcode..
                      ;;
                      (with-integrity []
                        (qx-make ::qxty/m.Popup
                          :anchor anchor
                          :kids (c?kids
                                  (vbox []
                                    (label "<h2>Told ya!</>")
                                    (button "True that"
                                      :listeners {"click"
                                                  (fn [e me]
                                                    (let [p (fget ::qxty/m.Popup me)]
                                                      (assert p (str "Popup not found above " me))
                                                      (.hide (qxme p))))}))))))
            
            :itemz (fn [dlgz anchor]
                     (with-integrity []
                       (qx-make ::qxty/m.Menu
                         :anchor anchor
                         :qx-new-args [(new js/qx.data.Array
                                         (clj->js ["item1" "item2" "item3"]))]
                         :listeners {"changeSelection"
                                     (fn [evt me]
                                       (let [jd (js->clj (.getData evt))]
                                         (let [mo (fget :menu-order
                                                    dlgz :up? false
                                                    :inside? true)]
                                           (assert dlgz)
                                           (assert mo)
                                           (md-reset!  mo
                                               :order (get jd "item")))))})))
            ;; :buzy (c? (let [dlgz me]
            ;;              (qx-make ::qxty/m.BusyIndicator
            ;;                :label "gogo"
            ;;                :spinnerClass "loader"
            ;;                :qx-new-args ["Patience..."])))
            ]

      (hbox []
        (label "Also clickable! ->")
        (qx-make ::qxty/m.Atom
          :label "Careful..."
          :css-class "hot"
          :translateX 12
          :listeners {"click"
                      (fn [e me]
                        (let [dlgz (fget :dlgz me)
                              pop-fn (:pop-fn @dlgz)]
                          (let [p (pop-fn me)]
                            (.show (qxme p)))))})

        (qx-make ::qxty/m.Atom
          :name :menu-order
          :label "Choose..."
          :translateX 24
          :css-class "cool"
          :order (c-in nil)
          :listeners {"click"
                      (fn [e me]
                        (let [dlgz (fget :dlgz me)
                              itemz (:itemz @dlgz)]
                          (let [p (itemz dlgz me)]
                            (println :pop (meta p))
                            (.show (qxme p)))))})

        (label (c? (if-let [item (md-get (fget :menu-order me) :order)]
                     (str " I'll have " item)
                     "nada, thx"))
          :translateX 48)
        #_ ;; not working yet
        (qx-make ::qxty/m.Atom
          :label "Get Busy!"
          :listeners {"click"
                      (fn [e me]
                        (when-let [dlg (md-get (fget :dlgz me) :buzy)]
                          (println :bidlg!!!! (nil? dlg)
                            (.getSpinnerClass (qxme dlg)))
                          (let [app (qxme @this-app)
                                root (.getRoot app)]
                            (assert app)
                            (assert root)
                            (.add root (qxme dlg)))))}))))))
