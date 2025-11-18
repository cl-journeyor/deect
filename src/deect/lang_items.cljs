(ns deect.lang-items
  (:require [clojure.string :as str]))

(def ^:private lang-item-type #{:syntax :function :data-type})

(defrecord ^:private CodeCollRec [clojure csharp java javascript python])

(defrecord ^:private LangItem [^String name type ccrec])

(defn- ml-str
  [& args]
  (str/join \newline args))

(def lang-items [(LangItem.
                  "Decimal"
                  (:data-type lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     ";;; Type."
                     "java.math.BigDecimal"
                     ""
                     ";;; Literal."
                     "123.456M")]
                   [(ml-str
                     "// Fully-qualified type"
                     "System.Decimal"
                     ""
                     "// Type"
                     "decimal"
                     ""
                     "// Literal"
                     "123.456M")]
                   [(ml-str
                     "// Fully-qualified type"
                     "java.math.BigDecimal"
                     ""
                     "// Instance"
                     "new BigDecimal(\"123.456\")")]
                   []
                   [(ml-str
                     "# Class"
                     "# decimal.Decimal"
                     ""
                     "# Instance"
                     "Decimal('123.456')")]))
                 (LangItem.
                  "if"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     "(if :expression"
                     "  :truthy-return"
                     "  :falsy-return)")
                    (ml-str
                     ";;; Returns nil if falsy."
                     "(when :expression"
                     "  :body)")]
                   [(ml-str
                     "if (booleanExpr)"
                     "{"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if (booleanExpr) {"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if (expression) {"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if expression:"
                     "    pass")]))
                 (LangItem.
                  "if-else"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     "(if :expression"
                     "  :truthy-return"
                     "  :falsy-return)")]
                   [(ml-str
                     "if (booleanExpr)"
                     "{"
                     "    // Body"
                     "}"
                     "else"
                     "{"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if (booleanExpr) {"
                     "    // Body"
                     "}"
                     "else {"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if (expression) {"
                     "    // Body"
                     "}"
                     "else {"
                     "    // Body"
                     "}")]
                   [(ml-str
                     "if expression:"
                     "    pass"
                     "else:"
                     "    pass")]))
                 (LangItem.
                  "Print"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(println :value)"]
                   ["Console.WriteLine(val);"]
                   ["System.out.println(value);"]
                   ["console.log(value);"]
                   ["print(value)"]))
                 (LangItem.
                  "Ternary operator ¦ Ternary expression"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     "(if :expression"
                     "  :truthy-return"
                     "  :falsy-return)")]
                   ["booleanExpr ? trueReturn : falseReturn"]
                   ["booleanExpr ? trueReturn : falseReturn"]
                   ["expression ? truthyReturn : falsyReturn"]
                   ["truthy_return if expression else falsy_return"]))])
