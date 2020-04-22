# 第二周总结
+ 语言通识
+ JavaScript
## 语言通识
+ 非形式语言
   + 中文
   + 英文
+ 形式语言(乔姆斯基谱系)
   + 0型  无限制文法 ?::=?
   + 1型  上下文相关文法 ??::=??
   + 2型  上下文无关文法 ::=?
   + 3型  正则文法 ::=?
大多数语言是2型,JavaScript是2型
### 形式语言产生
#### BNF
#### EBNF
#### ABNF
###  图灵完备
+ 命令式
   + goto
   + if 和while
+ 声明式 lambda
   + 递归
有循环就具有图灵完备性
## javascript部分
+ Atom(原子)
   + Identifier(标识符)
   + Literal (字面量)
+ Expression(表达式)
   + Atom 
   + Operator (操作符,+-*/)
   + Punctuator (运算符)
+ Statement
   + Expression
   + Keyword
   + Punctuator
+ Structure
   + Function
   + Class
   + Process
   + Namespace
+ Program
   + Program
   + Mould
   + Package
   + Library

### InputElement
+ WhiteSpace
+ LineTerminator
+ Comment
+ Token
   + Punctuator
   + IdentifierName
      + Identifier
      + Keywords
      + Future reserved Keywords: enum
    + Literal
      + Number
      + String
      + Boolean
      + Null
      + Undefined