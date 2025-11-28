(ns deect.utils)

(defn raw->map
  [s]
  (js->clj (.parse js/JSON s) :keywordize-keys true))
