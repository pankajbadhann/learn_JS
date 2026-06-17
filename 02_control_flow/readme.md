# 🎯 JavaScript Control Flow

Welcome to the second module of JavaScript.

Ab tak hum variables, data types aur operators seekh chuke hain. Lekin real applications mein sirf data store karna kaafi nahi hota.

Programs ko decisions bhi lene padte hain.

Examples:

* User eligible hai ya nahi?
* Password correct hai ya nahi?
* Number even hai ya odd?
* Weather ke according kya action lena hai?
* Game mein user jeeta ya haara?

Ye sab kaam **Control Flow** karta hai.

---

# 📂 Files Overview

| File                     | Topic                |   |   |
| ------------------------ | -------------------- | - | - |
| 14-if-else-statements.js | if & else Statements |   |   |
| 15-ternary-operator.js   | Ternary Operator     |   |   |
| 16-logical-operators.js  | AND (&&) & OR (      |   | ) |
| 17-nested-if-else.js     | Nested if else       |   |   |
| 18-if-else-if-ladder.js  | if else if Ladder    |   |   |
| 19-switch-statement.js   | Switch Statement     |   |   |

---

# 🤔 What is Control Flow?

Control Flow decide karta hai:

> Program kaunsa code execute karega aur kaunsa skip karega.

Example:

```js
let age = 20;
```

Agar age 18 se zyada hai:

```js
console.log("Eligible");
```

Warna:

```js
console.log("Not Eligible");
```

Program condition check karega aur uske according decision lega.

---

# 1️⃣ if & else Statement

📄 File: `14-if-else-statements.js`

## What is if?

if tab execute hota hai jab condition true ho.

Syntax:

```js
if(condition){
   // code
}
```

Example:

```js
let age = 20;

if(age >= 18){
   console.log("Adult");
}
```

Output:

```text
Adult
```

---

## What is else?

Agar if condition false ho jaye to else execute hota hai.

```js
if(age >= 18){
   console.log("Adult");
}
else{
   console.log("Child");
}
```

---

## Example: Even & Odd

```js
let num = 13;

if(num % 2 === 0){
   console.log("Even");
}
else{
   console.log("Odd");
}
```

---

## Real Life Analogy

Imagine:

* Age ≥ 18 → Driving License
* Age < 18 → Not Allowed

Ye exactly if else ka kaam hai.

---

# Truthy & Falsy Values

JavaScript har value ko internally true ya false treat karti hai.

---

## Falsy Values

Ye values condition mein false mani jati hain:

```js
false
0
""
null
undefined
NaN
```

Example:

```js
let name = "";

if(name){
   console.log("Available");
}
else{
   console.log("Empty");
}
```

Output:

```text
Empty
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

Example:

```js
if("JavaScript"){
   console.log("Runs");
}
```

Output:

```text
Runs
```

---

# 2️⃣ Ternary Operator

📄 File: `15-ternary-operator.js`

Ternary operator if else ka short version hai.

---

## Normal if else

```js
let age = 10;

let drink;

if(age >= 5){
   drink = "Coffee";
}
else{
   drink = "Milk";
}
```

---

## Ternary Version

```js
let drink = age >= 5 ? "Coffee" : "Milk";
```

---

## Syntax

```js
condition ? value1 : value2
```

Meaning:

```text
Condition True  → value1
Condition False → value2
```

---

## When to Use?

✔ Small conditions

❌ Large business logic

---

# 3️⃣ Logical Operators

📄 File: `16-logical-operators.js`

Kabhi kabhi ek se zyada conditions check karni padti hain.

Tab logical operators use karte hain.

---

# AND Operator (&&)

Dono conditions true honi chahiye.

Syntax:

```js
condition1 && condition2
```

Example:

```js
let age = 20;
let hasLicense = true;

if(age >= 18 && hasLicense){
   console.log("Can Drive");
}
```

Output:

```text
Can Drive
```

---

## Truth Table

| A     | B     | Result |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

---

# OR Operator (||)

Ek condition bhi true ho to result true.

Syntax:

```js
condition1 || condition2
```

Example:

```js
let age = 16;
let vip = true;

if(age >= 18 || vip){
   console.log("Entry Allowed");
}
```

Output:

```text
Entry Allowed
```

---

## Truth Table

| A     | B     | Result |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

---

# 4️⃣ Nested if else

📄 File: `17-nested-if-else.js`

Nested means:

> if ke andar another if.

Example:

```js
if(condition1){
   if(condition2){
      // code
   }
}
```

---

## Guess The Number Example

```js
let winningNumber = 19;
```

User:

```js
let userGuess = 17;
```

Check:

```js
if(userGuess === winningNumber){
   console.log("Correct");
}
else{
   if(userGuess < winningNumber){
      console.log("Too Low");
   }
   else{
      console.log("Too High");
   }
}
```

---

## Why Use Nested if?

Jab decision multiple levels par lena ho.

Example:

* Login successful?
* User admin hai?
* User premium hai?

---

# 5️⃣ if else if Ladder

📄 File: `18-if-else-if-ladder.js`

Jab multiple conditions check karni ho.

---

## Syntax

```js
if(condition1){

}
else if(condition2){

}
else if(condition3){

}
else{

}
```

---

## Temperature Example

```js
let temp = 35;
```

```js
if(temp < 0){
   console.log("Extremely Cold");
}
else if(temp < 16){
   console.log("Cold");
}
else if(temp < 25){
   console.log("Pleasant");
}
else if(temp < 35){
   console.log("Warm");
}
else{
   console.log("Hot");
}
```

---

## Important Rule

JavaScript top to bottom conditions check karti hai.

Jaise hi first true condition milti hai:

```text
Remaining conditions skip ho jati hain.
```

---

## Real World Uses

* Grading System
* Weather App
* Age Categories
* Discounts
* Subscription Plans

---

# 6️⃣ Switch Statement

📄 File: `19-switch-statement.js`

Switch multiple exact values compare karne ke liye use hota hai.

---

## Problem

Agar bohot saare else if ho:

```js
if(day === 0)
```

```js
else if(day === 1)
```

```js
else if(day === 2)
```

Code lengthy ho jata hai.

---

## Switch Solution

```js
switch(day){
   case 0:
      console.log("Sunday");
      break;

   case 1:
      console.log("Monday");
      break;

   default:
      console.log("Invalid");
}
```

---

# break Keyword

Bahut important.

```js
break;
```

Switch ko stop kar deta hai.

Agar break na lagao:

```js
case 1:
```

To niche ke saare cases bhi execute ho sakte hain.

Isse kehte hain:

```text
Fall Through
```

---

# default Case

Agar koi case match na ho:

```js
default:
```

execute hota hai.

Example:

```js
day = 10;
```

Output:

```text
Invalid Day
```

---

# if else vs switch

| if else                  | switch                    |
| ------------------------ | ------------------------- |
| Range check ke liye best | Exact values ke liye best |
| Flexible                 | Cleaner syntax            |
| Complex conditions       | Fixed cases               |

---

# 🧠 Mental Model

Programming mein decision making kuch is tarah hoti hai:

```text
Condition Check
       ↓
True ? -------> Run Block A
       ↓
False
       ↓
Run Block B
```

Control Flow ka pura purpose yahi hai.

---

# 🎯 What You Learned

After completing this module, you should understand:

✅ if Statement

✅ else Statement

✅ Truthy & Falsy Values

✅ Ternary Operator

✅ AND (&&)

✅ OR (||)

✅ Nested if else

✅ if else if Ladder

✅ Switch Statement

✅ break Keyword

✅ default Case

✅ Decision Making in JavaScript

---

# 🚀 Next Module

➡️ [Loops](../03_loops)

Next section mein aap seekhenge:

* while loop
* for loop
* do while loop
* break
* continue
* Iteration & Repetition

Ab tak program decision lena seekh gaya hai.

Next module mein program ko repeatedly kaam karna sikhayenge. 🔥
