(ns deect.index.core
  (:require [deect.index.index-button.core :refer [index-button]]
            [reagent.core :as r]))

(r/defc index
  []
  (let [lang-items (r/atom nil)]
    (-> (js/fetch "data/index.json")
        (.then #(.json %))
        (.then #(swap! lang-items (fn [_] (js->clj % :keywordize-keys true))))
        (.catch #(swap! lang-items (fn [_] :fetch-error))))
    (fn []
      [:div.index
       (case @lang-items
         nil [:h1 "Loading..."]
         :fetch-error [:h1 "Unexpected error"]
         (for [li @lang-items]
           [index-button {:key (:id li)
                          :lang-item li}]))])))
