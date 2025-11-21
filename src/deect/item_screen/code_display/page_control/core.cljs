(ns deect.item-screen.code-display.page-control.core
  (:require [deect.atoms :as ats]
            [reagent.core :as r]
            [reusable.page-control :as pc]))

(r/defc page-control
  [{selected-code-key :selected-code-key}]
  (let [lang (:lang (@ats/selected-code selected-code-key))
        code-coll-last-index (-> @ats/selected-lang-item
                                 :ccrec
                                 (get lang)
                                 count
                                 dec)
        update-page! (fn [{value :value}]
                       (swap!
                        ats/selected-code
                        #(assoc % selected-code-key {:lang lang
                                                     :page value})))
        pc-props {:classes {:buttons "page-control-buttons"
                            :text "page-control-text"}
                  :min 0}]
    [:div.page-control-container
     [pc/page-control
      (if (neg? code-coll-last-index)
        (-> pc-props
            (assoc :value 0)
            (assoc :max 0))
        (-> pc-props
            (assoc :value (:page (@ats/selected-code selected-code-key)))
            (assoc :max code-coll-last-index)
            (assoc :on-change update-page!)))]]))
