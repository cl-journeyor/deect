(ns deect.app.item-screen.code-display.code
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc code
  [{selected-code-key :selected-code-key}]
  (let [{:keys [lang page]} (@ats/selected-code selected-code-key)]
    (if lang
      (if-let [content (-> @ats/selected-lang-item
                           :ccrec
                           lang
                           (get page))]
        [:pre.display-content content]
        [:div.display-message "Not supported"])
      [:div.display-message "Click a language from above"])))
