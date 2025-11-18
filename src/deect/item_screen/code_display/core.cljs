(ns deect.item-screen.code-display.core
  (:require [deect.atoms :as ats]
            [deect.item-screen.code-display.code.core :refer [code]]
            [deect.item-screen.code-display.menu.core :refer [menu]]
            [reagent.core :as r]))

(r/defc code-display
  [{selected-code-key :selected-code-key}]
  [:div.code-display
   [menu {:selected-code-key selected-code-key}]
   [code {:selected-code-key selected-code-key}]])
