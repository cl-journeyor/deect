(ns deect.item-screen.code-display.menu.lang-button.core
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc lang-button
  [{:keys [group lang-keyword lang-name]}]
  (letfn [(show-code
            []
            (swap!
             ats/selected-code
             (fn [prev]
               (assoc prev group {:lang lang-keyword
                                  :page 0}))))]
    [:button.lang-button {:type "button"
                          :title lang-name
                          :on-click show-code
                          :disabled (= lang-keyword (-> @ats/selected-code
                                                        (nth group)
                                                        :lang))}
     [:img.lang-button-icon {:src (str
                                   "images/"
                                   (name lang-keyword)
                                   ".png")
                             :alt lang-name}]]))
