(ns deect.core
  (:require
   [deect.app :refer [app]]
   [reagent.dom :as d]))

(defn mount-root []
  (d/render [app] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
