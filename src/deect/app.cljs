(ns deect.app
  (:require [deect.atoms :as ats]
            [deect.index.core :refer [index]]
            [deect.item-screen.core :refer [item-screen]]
            [reagent.core :as r]))

(r/defc app
  []
  (if @ats/selected-lang-item
    [item-screen]
    [index]))
