(ns deect.app.item-screen
  (:require [deect.app.item-screen.code-display :refer [code-display]]
            [deect.atoms :as ats]
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
