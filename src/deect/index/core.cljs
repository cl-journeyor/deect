(ns deect.index.core
  (:require [deect.index.index-button.core :refer [index-button]]
            [deect.lang-items :refer [lang-items]]
            [reagent.core :as r]))

(r/defc index
  []
  [:div.index
   (map-indexed
    (fn [i li]
      [index-button {:key i
                     :lang-item li}])
    lang-items)])
