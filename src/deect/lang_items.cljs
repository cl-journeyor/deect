(ns deect.lang-items
  (:require [clojure.string :as str]))

(def ^:private lang-item-type #{:syntax :function :data-type})

(defrecord ^:private CodeCollRec [clojure csharp java javascript python])

(defrecord ^:private LangItem [^String name type ccrec])

(defn- ml-str
  [& args]
  (str/join \newline args))

(def lang-items [(LangItem.
                  "Addition ¦ Add ¦ Plus"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(+ 2 3)"]
                   ["2 + 3"]
                   ["2 + 3"]
                   ["2 + 3"]
                   ["2 + 3"]))
                 (LangItem.
                  "And"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(and :expression1 :expression2)"]
                   ["booleanExpr1 && booleanExpr2"]
                   ["booleanExpr1 && booleanExpr2"]
                   ["expression1 && expression2"]
                   ["expression1 and expression2"]))
                 (LangItem.
                  "Big integer"
                  (:data-type lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     ";;; Type."
                     "clojure.lang.BigInt"
                     ""
                     ";;; Literal."
                     "123N")]
                   [(ml-str
                     "// Fully-qualified type"
                     "System.Numerics.BigInteger"
                     ""
                     "// Instance"
                     "BigInteger.Parse(\"123\")")]
                   [(ml-str
                     "// Fully-qualified type"
                     "java.math.BigInteger"
                     ""
                     "// Instance"
                     "new BigInteger(\"123\")")]
                   [(ml-str
                     "// Type"
                     "// bigint"
                     ""
                     "// Literal"
                     "123n")]
                   [(ml-str
                     "# Type"
                     "# int"
                     ""
                     "# Literal"
                     "123")]))
                 (LangItem.
                  "Boolean ¦ Bool"
                  (:data-type lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     ";;; Type."
                     "java.lang.Boolean"
                     ""
                     ";;; Literals."
                     "false"
                     "true")]
                   [(ml-str
                     "// Fully-qualified type"
                     "System.Boolean"
                     ""
                     "// Type"
                     "bool"
                     ""
                     "// Literals"
                     "false"
                     "true")]
                   [(ml-str
                     "// Class"
                     "java.lang.Boolean"
                     ""
                     "// Primitive type"
                     "boolean"
                     ""
                     "// Literals"
                     "false"
                     "true")]
                   [(ml-str
                     "// Type"
                     "// boolean"
                     ""
                     "// Literals"
                     "false"
                     "true")]
                   [(ml-str
                     "# Type"
                     "# bool"
                     ""
                     "# Literals"
                     "False"
                     "True")]))
                 (LangItem.
                  "Comment"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   ["; Comment."]
                   ["// Single-line comment"
                    (ml-str
                     "/*"
                     "Multiline"
                     "comment"
                     "*/")]
                   ["// Single-line comment"
                    (ml-str
                     "/*"
                     "Multiline"
                     "comment"
                     "*/")]
                   ["// Single-line comment"
                    (ml-str
                     "/*"
                     "Multiline"
                     "comment"
                     "*/")]
                   ["# Comment"]))
                 (LangItem.
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
                  "Division ¦ Divide"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(/ 2 3.0)"
                    (ml-str
                     ";;; Returns a ratio when the remainder from dividing two"
                     ";;; integers is not zero."
                     "(/ 2 3)")]
                   ["2 / 3"]
                   ["2 / 3"]
                   ["2 / 3"]
                   ["2 / 3"
                    (ml-str
                     "# Integer division"
                     "2 // 3")]))
                 (LangItem.
                  "Equality ¦ Equal to"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(= 2 3)"
                    (ml-str
                     ";;; Semantic number equality."
                     "(== 2 3.0)")]
                   ["2 == 3"]
                   ["2 == 3"]
                   ["2 === 3"]
                   ["2 == 3"]))
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
                  "Inequality ¦ Not equal"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(not= 2 3)"]
                   ["2 != 3"]
                   ["2 != 3"]
                   ["2 !== 3"]
                   ["2 != 3"]))
                 (LangItem.
                  "Modulus ¦ Modulo ¦ Mod ¦ Remainder"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(mod 2 3)"]
                   ["2 % 3"]
                   ["2 % 3"]
                   ["2 % 3"]
                   ["2 % 3"]))
                 (LangItem.
                  "Multiplication ¦ Multiply"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(* 2 3)"]
                   ["2 * 3"]
                   ["2 * 3"]
                   ["2 * 3"]
                   ["2 * 3"]))
                 (LangItem.
                  "Not"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(not :expression)"]
                   ["!booleanExpr"]
                   ["!booleanExpr"]
                   ["!expression"]
                   ["not expression"]))
                 (LangItem.
                  "Null ¦ No value"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   ["nil"]
                   ["null"]
                   ["null"]
                   ["undefined" "null"]
                   ["None"]))
                 (LangItem.
                  "Or"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(or :expression1 :expression2)"]
                   ["booleanExpr1 || booleanExpr2"]
                   ["booleanExpr1 || booleanExpr2"]
                   ["expression1 || expression2"]
                   ["expression1 or expression2"]))
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
                  "String"
                  (:data-type lang-item-type)
                  (CodeCollRec.
                   [(ml-str
                     ";;; Type."
                     "java.lang.String"
                     ""
                     ";;; Literal."
                     "\"Hello\"")]
                   [(ml-str
                     "// Fully-qualified type"
                     "System.String"
                     ""
                     "// Type"
                     "string"
                     ""
                     "// Literal"
                     "\"Hello\"")]
                   [(ml-str
                     "// Fully-qualified type"
                     "java.lang.String"
                     ""
                     "// Type"
                     "String"
                     ""
                     "// Literal"
                     "\"Hello\"")]
                   [(ml-str
                     "// Type"
                     "// string"
                     ""
                     "// Literal"
                     "'Hello'")
                    (ml-str
                     "// Type"
                     "// string"
                     ""
                     "// Literal"
                     "\"Hello\"")]
                   [(ml-str
                     "# Type"
                     "# str"
                     ""
                     "# Literal"
                     "'Hello'")]))
                 (LangItem.
                  "String concatenation"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(str :a :b)"]
                   [(ml-str
                     "// Any of the operands must be a string"
                     "\"a\" + 1")]
                   [(ml-str
                     "// Any of the operands must be a string"
                     "\"a\" + 1")]
                   [(ml-str
                     "// Any of the operands must be a string"
                     "'a' + 1")]
                   [(ml-str
                     "# Both operands must be strings"
                     "'a' + str(1)")]))
                 (LangItem.
                  "String interpolation"
                  (:syntax lang-item-type)
                  (CodeCollRec.
                   []
                   ["$\"The value: {val}\""]
                   []
                   ["`The value: ${ value }`"]
                   ["f'The value: { value }'"]))
                 (LangItem.
                  "Subtraction ¦ Subtract ¦ Minus"
                  (:function lang-item-type)
                  (CodeCollRec.
                   ["(- 2 3)"]
                   ["2 - 3"]
                   ["2 - 3"]
                   ["2 - 3"]
                   ["2 - 3"]))
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
