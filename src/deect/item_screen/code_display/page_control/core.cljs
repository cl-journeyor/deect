(ns deect.item-screen.code-display.page-control.core
  (:require [reagent.core :as r]))

(r/defc page-control
  [{:keys [name value min max on-change]
    :or {value 1
         min 1
         max 3
         on-change (fn [_] nil)}}]
  (let [pages (-> (range min (inc max)) set)
        current (r/atom (if (contains? pages value) value min))
        swap-current! (fn [f]
                        (swap! current f)
                        (on-change {:name name
                                    :value @current}))]
    [:div
     [:button {:type "button"
               :on-click #(swap-current! dec)
               :disabled (= @current min)}
      "◁"]
     @current
     [:button {:type "button"
               :on-click #(swap-current! inc)
               :disabled (= @current max)}
      "▷"]]))
