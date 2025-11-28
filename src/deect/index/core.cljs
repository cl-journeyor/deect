(ns deect.index.core
  (:require [deect.index.index-button.core :refer [index-button]]
            [deect.utils :as u]
            [reagent.core :as r]))

(r/defc index
  []
  (let [lang-items (r/atom nil)
        fetch-lis (fn []
                    (-> (js/fetch "data/lang-items.json")
                        (.then #(.text %))
                        (.then (fn [t]
                                 (.setItem js/sessionStorage "lang-items" t)
                                 (swap! lang-items (fn [_] (u/raw->map t)))))
                        (.catch (fn []
                                  (swap! lang-items (fn [_] :fetch-error))))))]
    (if-let [raw-lis (.getItem js/sessionStorage "lang-items")]
      (try
        (swap! lang-items (fn [_] (u/raw->map raw-lis)))
        (catch js/SyntaxError _ (fetch-lis)))
      (fetch-lis))
    (fn []
      [:div.index
       (case @lang-items
         nil [:h1 "Loading..."]
         :fetch-error [:h1 "Unexpected error"]
         (for [li @lang-items]
           [index-button {:key (:id li)
                          :lang-item li}]))])))
