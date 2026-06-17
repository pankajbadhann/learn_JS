# 📘 JavaScript Fundamentals: Variables, Types & Operators

Welcome to the first module of JavaScript. 🎉

Agar aap JavaScript bilkul beginner level se start kar rahe hain, to ye folder aapke liye hai. Is module mein hum JavaScript ke sabse important building blocks seekhenge:

* Comments
* Variables
* Data Types
* Strings
* Type Conversion
* Template Literals
* Null & Undefined
* BigInt
* Comparison Operators
* Truthy & Falsy Values

> 💡 Tip: Programming ko language ki tarah samjho. Variables nouns ki tarah hote hain aur operators verbs ki tarah.

---

# 📂 Files Overview

| File                                 | Topic                    |
| ------------------------------------ | ------------------------ |
| 01-comments-and-console.js           | Comments & Console       |
| 02-var-keyword-and-variables.js      | Variables with var       |
| 03-variable-naming-rules.js          | Variable Naming Rules    |
| 04-let-keyword.js                    | let Keyword              |
| 05-const-keyword.js                  | const Keyword            |
| 06-string-indexing.js                | String Indexing          |
| 07-string-methods.js                 | String Methods           |
| 08-data-types-and-type-conversion.js | Data Types & Conversion  |
| 09-string-concatenation.js           | String Concatenation     |
| 10-template-literals.js              | Template Literals        |
| 11-null-undefined-and-bigint.js      | Null, Undefined & BigInt |
| 12-comparison-operators.js           | Comparison Operators     |
| 13-truthy-and-falsy-values.js        | Truthy & Falsy Values    |

---

# 1️⃣ Comments & Console

📄 File: `01-comments-and-console.js`

## What are Comments?

Comments wo text hote hain jo programmer ke liye likha jata hai.

JavaScript unhe execute nahi karti.

```js
// This is a comment
```

### Why use comments?

* Code explain karne ke liye
* Team members ko samjhane ke liye
* Future mein khud ko yaad dilane ke liye

---

## console.log()

Console par output print karne ke liye use hota hai.

```js
console.log("Hello World");
```

Output:

```text
Hello World
```

---

# 2️⃣ Variables (var)

📄 File: `02-var-keyword-and-variables.js`

## What is a Variable?

Variable ek container hota hai jo data store karta hai.

Example:

```js
var firstName = "Pankaj";
```

Yahan:

* `firstName` → Variable Name
* `"Pankaj"` → Value

Value baad mein change bhi ki ja sakti hai.

```js
firstName = "Loveleen";
```

---

## Strict Mode

```js
"use strict";
```

Strict mode common mistakes ko catch karta hai.

Example:

```js
lastName = "Badhan";
```

Error aayegi kyunki variable declare nahi hua.

---

# 3️⃣ Variable Naming Rules

📄 File: `03-variable-naming-rules.js`

## Valid Names

```js
age
userName
first_name
$user
```

## Invalid Names

```js
1name
first name
@user
```

---

## Best Practice

Use camelCase:

```js
firstName
userAge
totalPrice
```

---

# 4️⃣ let Keyword

📄 File: `04-let-keyword.js`

ES6 mein introduce hua.

```js
let firstName = "Pankaj";
```

Value change kar sakte hain:

```js
firstName = "Loveleen";
```

### Why prefer let over var?

* Safer
* Modern JavaScript standard
* Block scope support

---

# 5️⃣ const Keyword

📄 File: `05-const-keyword.js`

Constant values store karne ke liye.

```js
const pi = 3.14;
```

Change nahi kar sakte:

```js
pi = 5; // Error
```

Use when value should never change.

Examples:

```js
const PI = 3.14;
const MAX_USERS = 100;
```

---

# 6️⃣ String Indexing

📄 File: `06-string-indexing.js`

String characters ki collection hoti hai.

```js
let name = "Pankaj";
```

Indexes:

```text
P  a  n  k  a  j
0  1  2  3  4  5
```

Access:

```js
name[0]
```

Output:

```text
P
```

---

## Length Property

```js
name.length
```

Output:

```text
6
```

Last character:

```js
name[name.length - 1]
```

---

# 7️⃣ String Methods

📄 File: `07-string-methods.js`

## trim()

Extra spaces remove karta hai.

```js
"   hello   ".trim()
```

Output:

```text
hello
```

---

## toUpperCase()

```js
hello.toUpperCase()
```

Output:

```text
HELLO
```

---

## toLowerCase()

```js
HELLO.toLowerCase()
```

Output:

```text
hello
```

---

## slice()

String ka part nikalta hai.

```js
let str = "pankaj";

str.slice(0,4);
```

Output:

```text
pank
```

---

# 8️⃣ Data Types & Type Conversion

📄 File: `08-data-types-and-type-conversion.js`

## Primitive Data Types

### String

```js
"hello"
```

### Number

```js
10
3.14
```

### Boolean

```js
true
false
```

### Undefined

```js
let x;
```

### Null

```js
null
```

### BigInt

Large integers.

### Symbol

Unique values.

---

## typeof Operator

```js
typeof 10
```

Output:

```text
number
```

---

## Number → String

```js
age = age + "";
```

---

## String → Number

```js
+"34"
```

or

```js
Number("34")
```

---

# 9️⃣ String Concatenation

📄 File: `09-string-concatenation.js`

Strings ko jodna.

```js
"Hello" + " World"
```

Output:

```text
Hello World
```

Example:

```js
let firstName = "Pankaj";
let lastName = "Badhan";

let fullName = firstName + " " + lastName;
```

---

# 🔟 Template Literals

📄 File: `10-template-literals.js`

Modern way to create strings.

Old:

```js
"My name is " + firstName
```

Modern:

```js
`My name is ${firstName}`
```

Example:

```js
let age = 20;
let name = "Pankaj";

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

# 1️⃣1️⃣ Null, Undefined & BigInt

📄 File: `11-null-undefined-and-bigint.js`

## Undefined

Variable declare hua hai but value assign nahi hui.

```js
let user;
```

---

## Null

Intentional empty value.

```js
let user = null;
```

Meaning:

```text
Currently no value
```

---

## typeof null

```js
typeof null
```

Output:

```text
object
```

Ye JavaScript ka historical bug hai.

---

## BigInt

Very large numbers store karne ke liye.

```js
123456789123456789123456789n
```

or

```js
BigInt(123)
```

---

# 1️⃣2️⃣ Comparison Operators

📄 File: `12-comparison-operators.js`

Comparison operators true ya false return karte hain.

---

## Greater Than

```js
10 > 5
```

Output:

```js
true
```

---

## Less Than

```js
5 < 10
```

Output:

```js
true
```

---

## == (Loose Equality)

Only values compare karta hai.

```js
7 == "7"
```

Output:

```js
true
```

---

## === (Strict Equality)

Value + Type compare karta hai.

```js
7 === "7"
```

Output:

```js
false
```

---

## Recommendation

Always use:

```js
===
!== 
```

---

# 1️⃣3️⃣ Truthy & Falsy Values

📄 File: `13-truthy-and-falsy-values.js`

JavaScript har value ko internally true ya false treat karti hai.

---

## Falsy Values

```js
false
0
""
null
undefined
NaN
```

---

## Truthy Values

```js
"hello"
1
-1
[]
{}
```

---

Example:

```js
if ("hello") {
  console.log("Runs");
}
```

Output:

```text
Runs
```

---

# 🎯 What You Learned

After completing this module you should understand:

✅ Comments

✅ Console Output

✅ Variables

✅ var, let, const

✅ Naming Rules

✅ Strings

✅ String Methods

✅ Data Types

✅ Type Conversion

✅ Template Literals

✅ Null & Undefined

✅ BigInt

✅ Comparison Operators

✅ Truthy & Falsy Values

---

# 🚀 Next Module

➡️ Control Flow

In the next section you'll learn:

* if statements
* if else
* nested conditions
* logical operators
* switch statements

These concepts allow your programs to make decisions.
