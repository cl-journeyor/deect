(ns deect.screens.item-screen
  (:require [deect.atoms :as ats]
            [reagent.core :as r]))

(r/defc ^:private lang-button
  [{:keys [group lang-keyword lang-name]}]
  (letfn [(show-code
            []
            (swap!
             ats/selected-code
             (fn [prev]
               (assoc prev group {:lang lang-keyword
                                  :page 0}))))]
    (fn []
      [:button.lang-button {:type "button"
                            :title lang-name
                            :on-click show-code}
       [:img.lang-button-icon {:src (str
                                     "/images/"
                                     (name lang-keyword)
                                     ".png")
                               :alt lang-name}]])))

(r/defc ^:private code-display
  [{key :key}]
  [:div.code-display
   [:menu
    [:li
     [lang-button {:group key
                   :lang-keyword :clojure
                   :lang-name "Clojure"}]]
    [:li
     [lang-button {:group key
                   :lang-keyword :csharp
                   :lang-name "C#"}]]
    [:li
     [lang-button {:group key
                   :lang-keyword :java
                   :lang-name "Java"}]]
    [:li
     [lang-button {:group key
                   :lang-keyword :javascript
                   :lang-name "JavaScript"}]]
    [:li
     [lang-button {:group key
                   :lang-keyword :python
                   :lang-name "Python"}]]]
   [:pre
    (let [{:keys [lang page]} (@ats/selected-code key)]
      (if lang
        (-> @ats/selected-lang-item
            :ccrec
            lang
            (get page))
        "Your code will appear here"))]])

(r/defc item-screen
  []
  [:div
   [:header {:class (str
                     "header "
                     (name (:type @ats/selected-lang-item)))}
    (:name @ats/selected-lang-item)]
   [:main.displays
    [code-display {:key 0}]
    [code-display {:key 1}]]]) ; TODO.
