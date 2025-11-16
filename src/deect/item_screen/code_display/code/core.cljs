(ns deect.item-screen.code-display.code.core
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc code
  [{selected-code-key :selected-code-key}]
  [:pre
   (let [{:keys [lang page]} (@ats/selected-code selected-code-key)]
     (if lang
       (-> @ats/selected-lang-item
           :ccrec
           lang
           (get page))
       "Click a language from above"))])
