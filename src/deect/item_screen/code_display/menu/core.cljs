(ns deect.item-screen.code-display.menu.core
  (:require [deect.item-screen.code-display.menu.lang-button.core :refer [lang-button]]
            [reagent.core :as r]))

(r/defc menu
  [{selected-code-key :selected-code-key}]
  [:div.lang-menu
   (for [[k n] {:clojure "Clojure"
                :csharp "C#"
                :java "Java"
                :javascript "JavaScript"
                :python "Python"}]
     [lang-button {:key k
                   :group selected-code-key
                   :lang-keyword k
                   :lang-name n}])])
