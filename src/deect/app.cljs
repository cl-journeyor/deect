(ns deect.app
  (:require [deect.atoms :as ats]
            [deect.screens.index :refer [index]]
            [deect.screens.item-screen :refer [item-screen]]
            [reagent.core :as r]))

(defn- print-selected-lang-item
  []
  (doseq [[k cs] (:ccrec @ats/selected-lang-item)]
    (println k)
    (doseq [c cs]
      (println c))
    (println " ")))

(r/defc app
  []
  (if @ats/selected-lang-item
    [item-screen]
    [index]))
