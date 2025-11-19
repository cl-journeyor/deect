(ns deect.item-screen.code-display.core
  (:require [deect.atoms :as ats]
            [deect.item-screen.code-display.code.core :refer [code]]
            [deect.item-screen.code-display.menu.core :refer [menu]]
            [deect.item-screen.code-display.page-control.core :refer [page-control]]
            [reagent.core :as r]))

(r/defc code-display
  [{selected-code-key :selected-code-key}]
  [:div.code-display
   [menu {:selected-code-key selected-code-key}]
   [code {:selected-code-key selected-code-key}]
   (when-let [lang (:lang (@ats/selected-code selected-code-key))]
     (let [code-coll-count (-> @ats/selected-lang-item :ccrec lang count)
           update-page! (fn [{value :value}]
                          (swap!
                           ats/selected-code
                           #(assoc % selected-code-key {:lang lang
                                                        :page value})))]
       (when-not (zero? code-coll-count)
         [page-control {:value (:page (@ats/selected-code selected-code-key))
                        :min 0
                        :max (dec code-coll-count)
                        :on-change update-page!}])))])
