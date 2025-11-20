(ns deect.item-screen.core
  (:require [deect.atoms :as ats]
            [deect.item-screen.code-display.core :refer [code-display]]
            [reagent.core :as r]))

(r/defc item-screen
  []
  (letfn [(reset-atoms
            []
            (swap! ats/selected-lang-item (fn [_] nil))
            (swap! ats/selected-code (fn [_] [{:lang nil
                                               :page 0}
                                              {:lang nil
                                               :page 0}])))]
    [:div
     [:header {:class (name (:type @ats/selected-lang-item))}
      [:button.exit-button {:type "button"
                            :on-click reset-atoms}
       "×"]
      [:div.header-text (:name @ats/selected-lang-item)]]
     [:main.displays
      [code-display {:selected-code-key 0}]
      [code-display {:selected-code-key 1}]]]))
