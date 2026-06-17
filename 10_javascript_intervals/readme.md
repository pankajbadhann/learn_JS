# ⚡ How JavaScript Works Internally

Welcome to the most important JavaScript module.

Ab tak hum JavaScript likh rahe the.

Lekin ab hum samjhenge:

* JavaScript code execute kaise karta hai?
* Hoisting kya hoti hai?
* Execution Context kya hota hai?
* Scope Chain kaise kaam karti hai?
* Closures kya hote hain?
* Closures itne important kyu hain?

Ye concepts interviews, React, Node.js aur Advanced JavaScript ki foundation hain.

---

# 📂 Files Overview

| File                                  | Topic                              |
| ------------------------------------- | ---------------------------------- |
| 93_global_execution_context.js        | Global Execution Context           |
| 94_hoisting_function_declaration.js   | Hoisting                           |
| 95_hoisting_function_expression.js    | Hoisting with Function Expressions |
| 96_temporal_dead_zone_let.js          | TDZ                                |
| 97_function_creation_execution.js     | Function Creation Phase            |
| 98_function_execution_context.js      | Function Execution Context         |
| 99_lexical_environment_scope_chain.js | Scope Chain                        |
| 100_closures_basics.js                | Closures Introduction              |
| 101_closure_variable_preservation.js  | Variable Preservation              |
| 102_closure_function_factory.js       | Closure Factory Functions          |
| 103_closure_private_counter.js        | Real World Closure Example         |

---

# 🧠 Before Starting

JavaScript code directly line-by-line execute nahi karta.

Pehle:

```text
Compilation Phase
```

Fir:

```text
Execution Phase
```

---

# JavaScript Execution Flow

```text
JavaScript File
       ↓
Compilation
       ↓
Memory Creation Phase
       ↓
Code Execution Phase
```

Ye process har function ke liye bhi hota hai.

---

# 1️⃣ Global Execution Context

📄 File: 93_global_execution_context.js

Jab JavaScript file run hoti hai to sabse pehle Global Execution Context create hota hai.

---

## Global Execution Context Kya Hai?

Ek special environment jahan:

* Variables store hote hain
* Functions store hote hain
* Code execute hota hai

---

## Browser Me

```js
console.log(this);
console.log(window);
```

Output:

```text
Window Object
```

Browser me:

```js
this === window
```

Global level par true hota hai.

---

# Memory Creation Phase

Code execute hone se pehle JavaScript memory allocate karta hai.

Example:

```js
var firstName = "Harshit";
```

Memory Phase:

```text
firstName : undefined
```

Execution Phase:

```text
firstName : "Harshit"
```

---

# 2️⃣ Hoisting

📄 File: 94_hoisting_function_declaration.js

JavaScript declarations ko memory phase me register kar leta hai.

Is behavior ko Hoisting kehte hain.

---

## Example

```js
hello();

function hello(){
    console.log("Hello");
}
```

Works perfectly.

---

## Why?

Memory Phase:

```text
hello -> complete function
```

Execution Phase:

```text
hello()
```

Already available.

---

# Function Declaration Hoisting

```js
hello();

function hello(){
}
```

✅ Works

---

# Variable Hoisting

```js
console.log(name);

var name = "Pankaj";
```

Output:

```text
undefined
```

Error nahi aata.

Kyuki memory phase me:

```text
name : undefined
```

already create ho chuka hota hai.

---

# 3️⃣ Function Expression Hoisting

📄 File: 95_hoisting_function_expression.js

Example:

```js
console.log(myFunction);

var myFunction = function(){
}
```

Output:

```text
undefined
```

Function nahi milega.

Sirf variable hoist hoga.

---

Memory Phase:

```text
myFunction : undefined
```

Function body store nahi hoti.

---

# Difference

Function Declaration:

```js
function hello(){}
```

Memory me pura function store hota hai.

---

Function Expression:

```js
const hello = function(){}
```

Memory me variable store hota hai.

Function baad me assign hota hai.

---

# 4️⃣ Temporal Dead Zone (TDZ)

📄 File: 96_temporal_dead_zone_let.js

let aur const hoist to hote hain.

Lekin access nahi kiye ja sakte.

---

Example:

```js
console.log(name);

let name = "Pankaj";
```

Output:

```text
ReferenceError
```

---

# TDZ Kya Hai?

Declaration aur initialization ke beech ka area.

```text
TDZ
↓
let name
↓
name = "Pankaj"
```

Is zone me variable exist karta hai.

Lekin access nahi ho sakta.

---

# var vs let

var:

```js
console.log(a);

var a = 10;
```

Output:

```text
undefined
```

---

let:

```js
console.log(a);

let a = 10;
```

Output:

```text
ReferenceError
```

---

# 5️⃣ Function Creation & Execution

📄 File: 97_function_creation_execution.js

Function create hone par execute nahi hota.

---

Example:

```js
const myFunction = function(){
    console.log("Hello");
}
```

Abhi sirf function create hua hai.

Run nahi hua.

Execute karne ke liye:

```js
myFunction();
```

zaroori hai.

---

# Function Lifecycle

```text
Create
↓
Store
↓
Call
↓
Execute
```

---

# 6️⃣ Function Execution Context

📄 File: 98_function_execution_context.js

Jab function call hota hai tab JavaScript uske liye naya Execution Context create karta hai.

---

Example

```js
function add(a,b){
    return a+b;
}

add(2,3);
```

---

Execution Context

```text
Arguments
Variables
Function Body
```

sab yahan store hote hain.

---

# Call Stack

Function calls stack me jaati hain.

```text
Global
↓
add()
↓
return
↓
Global
```

---

# Example

```js
getFullName("Harshit","Sharma");
```

Arguments object:

```js
{
 0: "Harshit",
 1: "Sharma"
}
```

Automatically create hota hai.

---

# 7️⃣ Lexical Environment

📄 File: 99_lexical_environment_scope_chain.js

Sabse important concepts me se ek.

---

Example

```js
const lastName = "Sharma";

function printName(){

   const firstName = "Harshit";

   function myFunction(){
      console.log(firstName);
      console.log(lastName);
   }

   myFunction();
}
```

Output:

```text
Harshit
Sharma
```

---

# Why?

Kyuki myFunction apne outer scope ko access kar sakta hai.

---

# Scope Chain

Search Order:

```text
Current Scope
↓
Parent Scope
↓
Grand Parent Scope
↓
Global Scope
```

---

Visual

```text
Global
│
└── printName()
       │
       └── myFunction()
```

---

# 8️⃣ Closures Introduction

📄 File: 100_closures_basics.js

Closures JavaScript ka sabse powerful concept hai.

---

# Definition

Closure =

```text
Function
+
Lexical Environment
```

---

Example

```js
function outer(){

   function inner(){
      console.log("Hello");
   }

   return inner;
}
```

---

```js
const ans = outer();

ans();
```

Output:

```text
Hello
```

---

# Real Closure Example

```js
function printFullName(firstName,lastName){

   function printName(){
      console.log(firstName,lastName);
   }

   return printName;
}
```

---

```js
const ans = printFullName("Harshit","Sharma");

ans();
```

Output:

```text
Harshit Sharma
```

---

Outer function finish ho chuka hai.

Fir bhi values available hain.

Yehi Closure hai.

---

# 9️⃣ Variable Preservation

📄 File: 101_closure_variable_preservation.js

Example

```js
function hello(x){

   const a = "varA";
   const b = "varB";

   return function(){
      console.log(a,b,x);
   }
}
```

---

```js
const ans = hello("arg");

ans();
```

Output:

```text
varA varB arg
```

---

Question:

Outer function to execute ho chuka tha.

Variables delete kyu nahi hue?

---

Answer:

Closure.

Returned function un variables ka reference preserve rakhta hai.

---

# 🔟 Closure Function Factory

📄 File: 102_closure_function_factory.js

Closures ki wajah se hum functions generate kar sakte hain.

---

Example

```js
function myFunction(power){

   return function(number){
      return number ** power;
   }
}
```

---

Create Square

```js
const square = myFunction(2);

square(3);
```

Output:

```text
9
```

---

Create Cube

```js
const cube = myFunction(3);

cube(3);
```

Output:

```text
27
```

---

Visual

```text
power = 2
      ↓
square()

power = 3
      ↓
cube()
```

Har returned function apna alag environment preserve karta hai.

---

# 1️⃣1️⃣ Private Variables with Closures

📄 File: 103_closure_private_counter.js

Ye closure ka real-world use hai.

---

Example

```js
function func(){

   let counter = 0;

   return function(){

      if(counter < 1){
         console.log("Called");
         counter++;
      }
   }
}
```

---

```js
const myFunc = func();

myFunc();
myFunc();
```

Output:

```text
Called
Already Called
```

---

# Why Important?

Counter variable directly access nahi ho sakta.

Sirf returned function use kar sakta hai.

---

# Private Variable Concept

```text
Outside World
      ❌
counter

Returned Function
      ✅
counter
```

---

# Real World Uses of Closures

Closures use hote hain:

✅ React Hooks

✅ Event Listeners

✅ Timers

✅ Memoization

✅ Data Hiding

✅ Private Variables

✅ Function Factories

✅ Currying

✅ Debouncing

✅ Throttling

---

# 🧠 Mental Model

Closure means:

```text
Function
+
Remembered Variables
```

Ya:

```text
Function
+
Its Birth Place Memory
```

---

# 🚨 Common Beginner Mistakes

### Thinking Variables Get Destroyed

Wrong:

```text
Outer function finished
so variables destroyed
```

Closure me preserve rehte hain.

---

### Confusing Scope with Closure

Scope:

```text
Where variable can be accessed
```

Closure:

```text
Function remembers variables
even after outer function finishes
```

---

### Ignoring Lexical Environment

Closure samajhne ke liye pehle:

✅ Scope

✅ Scope Chain

✅ Lexical Environment

samajhna zaroori hai.

---

# 🚀 Next Module

➡️ [DOM Manipulation](../11_dom_manipulation)

Ab tak hum JavaScript ko browser ke bahar samajh rahe the.

Next section me hum seekhenge:

* HTML ko JavaScript se select karna
* Elements ko modify karna
* Events handle karna
* Dynamic UI banana
* Real Projects create karna

Yahi se actual Frontend Development start hoti hai. 🔥
