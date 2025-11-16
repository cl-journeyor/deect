(ns deect.index.index-button.core
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc index-button
  [{lang-item :lang-item}]
  [:button {:class (str "index-button " (name (:type lang-item)))
            :type "button"
            :on-click (fn []
                        (swap!
                         ats/selected-lang-item
                         (fn [_] lang-item)))}
   (:name lang-item)])
