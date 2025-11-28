(ns deect.index.index-button.core
  (:require [deect.atoms :as ats]
            [deect.utils :as u]
            [reagent.core :as r]))

(r/defc index-button
  [{lang-item :lang-item}]
  (letfn [(fetch-ccrec
            []
            (-> (js/fetch (str "data/code-coll-recs/" (:id lang-item) ".json"))
                (.then #(.text %))
                (.then (fn [t]
                         (.setItem js/sessionStorage (:id lang-item) t)
                         (swap!
                          ats/selected-lang-item
                          (fn [_] (assoc lang-item :ccrec (u/raw->map t))))))
                (.catch #(println "Couldn't fetch the selected record."))))
          (handler
            []
            (if-let [raw-ccrec (.getItem js/sessionStorage (:id lang-item))]
              (try
                (swap!
                 ats/selected-lang-item
                 (fn [_] (assoc lang-item :ccrec (u/raw->map raw-ccrec))))
                (catch js/SyntaxError _ (fetch-ccrec)))
              (fetch-ccrec)))]
    [:button {:class (str "index-button " (name (:type lang-item)))
              :type "button"
              :on-click handler}
     (:name lang-item)]))
