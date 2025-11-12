(ns deect.app
  (:require [deect.atoms :as ats]
            [deect.lang-items :refer [lang-items]]
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
  (letfn [(lang-item->button
            [i li]
            [:button {:key i
                      :class (str "index-button " (name (:type li)))
                      :type "button"
                      :on-click (fn []
                                  (swap!
                                   ats/selected-lang-item
                                   (fn [_] li)))}
             (:name li)])]
    (fn []
      (if @ats/selected-lang-item
        (do
          (print-selected-lang-item)
          [:h2 "OK"])
        [:div.index
         (map-indexed lang-item->button lang-items)]))))
