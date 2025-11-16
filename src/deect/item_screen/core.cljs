(ns deect.item-screen.core
  (:require [deect.atoms :as ats]
            [deect.item-screen.code-display.core :refer [code-display]]
            [reagent.core :as r]))

(r/defc item-screen
  []
  [:div
   [:header {:class (str
                     "header "
                     (name (:type @ats/selected-lang-item)))}
    (:name @ats/selected-lang-item)]
   [:main.displays
    [code-display {:selected-code-key 0}]
    [code-display {:selected-code-key 1}]]])
