(ns deect.atoms
  (:require [reagent.core :as r]))

(def selected-lang-item (r/atom nil))

(def selected-code (r/atom [{:lang nil
                             :page 0}
                            {:lang nil
                             :page 0}]))
