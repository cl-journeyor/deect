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
                                                     :page value})))]
    (if (= code-coll-last-index -1)
      [pc/page-control {:value 0
                        :min 0
                        :max 0}]
      [pc/page-control {:value (:page (@ats/selected-code selected-code-key))
                        :min 0
                        :max code-coll-last-index
                        :on-change update-page!}])))
