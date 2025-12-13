(ns deect.app
  (:require [deect.app.index :refer [index]]
            [deect.app.item-screen :refer [item-screen]]
            [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc app
  []
  (if @ats/selected-lang-item
    [item-screen]
    [index]))
