(ns deect.index.index-button.core
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc index-button
  [{lang-item :lang-item}]
  (letfn [(fetch-ccrec
            []
            (-> (js/fetch (str "data/code-coll-recs/" (:id lang-item) ".json"))
                (.then #(.json %))
                (.then #(let [ccrec (js->clj % :keywordize-keys true)]
                          (swap!
                           ats/selected-lang-item
                           (fn [_] (assoc lang-item :ccrec ccrec)))))
                (.catch #(println "Couldn't fetch the selected record."))))]
    [:button {:class (str "index-button " (name (:type lang-item)))
              :type "button"
              :on-click fetch-ccrec}
     (:name lang-item)]))
