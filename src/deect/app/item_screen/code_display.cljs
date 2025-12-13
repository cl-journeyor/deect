(ns deect.app.item-screen.code-display
  (:require [deect.app.item-screen.code-display.code :refer [code]]
            [deect.app.item-screen.code-display.menu :refer [menu]]
            [deect.app.item-screen.code-display.page-control :refer [page-control]]
            [reagent.core :as r]))

(r/defc code-display
  [{selected-code-key :selected-code-key}]
  [:div {:class (str "code-display-" selected-code-key)}
   [menu {:selected-code-key selected-code-key}]
   [code {:selected-code-key selected-code-key}]
   [page-control {:selected-code-key selected-code-key}]])
