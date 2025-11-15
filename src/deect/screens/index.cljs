(ns deect.screens.index
  (:require [deect.atoms :as ats]
            [deect.lang-items :refer [lang-items]]
            [reagent.core :as r]))

(r/defc ^:private index-button
  [{lang-item :lang-item}]
  [:button {:class (str "index-button " (name (:type lang-item)))
            :type "button"
            :on-click (fn []
                        (swap!
                         ats/selected-lang-item
                         (fn [_] lang-item)))}
   (:name lang-item)])

(r/defc index
  []
  [:div.index
   (map-indexed
    (fn [i li]
      [index-button {:key i
                     :lang-item li}])
    lang-items)])
