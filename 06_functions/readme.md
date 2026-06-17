# ⚡ JavaScript Functions

Welcome to the Functions Module.

Ab tak hum variables, conditions, loops, arrays aur objects seekh chuke hain.

Lekin ek problem hai...

Agar hume same code baar-baar likhna pade to?

Example:

```js
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
console.log("Happy Birthday");
```

Ya baar-baar numbers add karne padhe:

```js
console.log(2 + 3);
console.log(10 + 20);
console.log(5 + 8);
```

Code repetitive ho jayega.

Isi problem ko solve karne ke liye JavaScript mein **Functions** hote hain.

---

# 🤔 What is a Function?

Function ek reusable block of code hota hai jo ek specific task perform karta hai.

Simple words mein:

> "Write Once, Use Many Times"

Example:

```js
function greet(){
    console.log("Hello World");
}
```

Function ko execute karne ke liye:

```js
greet();
```

Output:

```text
Hello World
```

---

# 🎯 Why Functions?

Functions help us:

✅ Reuse Code

✅ Reduce Repetition

✅ Improve Readability

✅ Organize Logic

✅ Make Applications Easier to Maintain

---

# 📂 Files Overview

| File                                | Topic                         |
| ----------------------------------- | ----------------------------- |
| 44-function-declaration.js          | Function Declaration          |
| 45-function-expression.js           | Function Expression           |
| 46-arrow-functions.js               | Arrow Functions               |
| 47-hoisting.js                      | Hoisting                      |
| 48-functions-inside-functions.js    | Nested Functions              |
| 49-lexical-scope.js                 | Lexical Scope                 |
| 50-block-scope-vs-function-scope.js | Scope                         |
| 51-default-parameters.js            | Default Parameters            |
| 52-rest-parameters.js               | Rest Parameters               |
| 53-parameter-destructuring.js       | Parameter Destructuring       |
| 54-callback-functions.js            | Callback Functions            |
| 55-functions-returning-functions.js | Functions Returning Functions |

---

# 1️⃣ Function Declaration

📄 File: `44-function-declaration.js`

Most common way to create functions.

---

## Syntax

```js
function functionName(){
    // code
}
```

Example:

```js
function singHappyBirthday(){
    console.log("Happy Birthday");
}
```

Call Function:

```js
singHappyBirthday();
```

---

# Parameters and Arguments

Parameters:

```js
function add(a,b){
}
```

Arguments:

```js
add(2,3);
```

Result:

```js
function add(a,b){
    return a+b;
}
```

Output:

```text
5
```

---

# return Keyword

```js
return value;
```

Function execution stop kar deta hai aur value return karta hai.

Example:

```js
function square(num){
    return num * num;
}
```

---

# Real Examples

Even Number Check:

```js
function isEven(number){
    return number % 2 === 0;
}
```

Find First Character:

```js
function firstChar(str){
    return str[0];
}
```

Search in Array:

```js
function findTarget(array,target){
}
```

---

# 2️⃣ Function Expression

📄 File: `45-function-expression.js`

Function ko variable ke andar store karna.

---

```js
const greet = function(){
    console.log("Hello");
}
```

Call:

```js
greet();
```

---

# Difference

Declaration:

```js
function greet(){}
```

Expression:

```js
const greet = function(){}
```

Both work similarly.

Creation style differs.

---

# Why Use Function Expressions?

Useful when:

* Functions are assigned to variables
* Passing functions as arguments
* Callbacks

---

# 3️⃣ Arrow Functions

📄 File: `46-arrow-functions.js`

Modern JavaScript ka preferred syntax.

---

Traditional:

```js
const greet = function(){
    console.log("Hello");
}
```

Arrow:

```js
const greet = () => {
    console.log("Hello");
}
```

---

# Single Parameter

```js
const square = num => {
    return num*num;
}
```

---

# Single Line Return

```js
const square = num => num*num;
```

Same result.

Cleaner syntax.

---

# Why Arrow Functions?

✅ Shorter

✅ Cleaner

✅ Common in React

✅ Modern JavaScript Standard

---

# 4️⃣ Hoisting

📄 File: `47-hoisting.js`

One of the most confusing JavaScript concepts.

---

Example:

```js
hello();

function hello(){
    console.log("Hello");
}
```

Output:

```text
Hello
```

Even though function declaration appears later.

---

# Why?

JavaScript internally moves declarations to the top.

This behavior is called:

```text
Hoisting
```

---

# Function Declaration Hoisting

Works:

```js
hello();

function hello(){}
```

---

# Function Expression Hoisting

Does NOT work:

```js
hello();

const hello = function(){}
```

Error ❌

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

---

# let and const

```js
console.log(name);

let name = "Pankaj";
```

Error ❌

Reason:

```text
Temporal Dead Zone (TDZ)
```

---

# 5️⃣ Functions Inside Functions

📄 File: `48-functions-inside-functions.js`

Functions can contain other functions.

---

Example:

```js
function app(){

    function greet(){
        console.log("Hello");
    }

    greet();
}
```

---

# Why Useful?

Encapsulation.

Inner functions remain private.

Outside code cannot access them.

---

# 6️⃣ Lexical Scope

📄 File: `49-lexical-scope.js`

Very important concept.

---

Example:

```js
const myVar = "value1";

function myApp(){

    function myFunc(){
        console.log(myVar);
    }

    myFunc();
}
```

Output:

```text
value1
```

---

# What is Lexical Scope?

A function can access variables from the place where it was created.

Not where it was called.

---

Visual:

```text
Global Scope
│
└── myApp()
      │
      └── myFunc()
```

myFunc searches variables upwards.

---

# Scope Chain

Search order:

```text
Current Scope
↓
Parent Scope
↓
Global Scope
```

---

# 7️⃣ Block Scope vs Function Scope

📄 File: `50-block-scope-vs-function-scope.js`

---

# Block Scope

let and const are block scoped.

```js
if(true){
    let name = "Pankaj";
}
```

Outside:

```js
console.log(name);
```

Error ❌

---

# Function Scope

var is function scoped.

```js
if(true){
    var name = "Pankaj";
}
```

Outside:

```js
console.log(name);
```

Works ✅

---

# Modern Rule

Prefer:

```js
let
const
```

Avoid:

```js
var
```

---

# 8️⃣ Default Parameters

📄 File: `51-default-parameters.js`

Provide fallback values.

---

Old Way:

```js
function add(a,b){

    if(typeof b === "undefined"){
        b = 0;
    }

    return a+b;
}
```

---

Modern Way:

```js
function add(a,b=0){
    return a+b;
}
```

---

Example:

```js
add(5);
```

Output:

```text
5
```

---

# 9️⃣ Rest Parameters

📄 File: `52-rest-parameters.js`

Collect remaining arguments.

---

Example:

```js
function myFunc(a,b,...c){
}
```

Call:

```js
myFunc(1,2,3,4,5);
```

Result:

```js
a = 1
b = 2
c = [3,4,5]
```

---

# Real Example

```js
function addAll(...numbers){
}
```

Input:

```js
addAll(1,2,3,4,5);
```

Output:

```text
15
```

---

# Rest Operator Mental Model

```text
Extra values
        ↓
Collected into Array
```

---

# 🔟 Parameter Destructuring

📄 File: `53-parameter-destructuring.js`

Commonly used in React.

---

Object:

```js
const person = {
    firstName: "Pankaj",
    gender: "male"
};
```

---

Without Destructuring

```js
function print(obj){
    console.log(obj.firstName);
}
```

---

With Destructuring

```js
function print({firstName,gender}){
}
```

Cleaner and shorter.

---

# 1️⃣1️⃣ Callback Functions

📄 File: `54-callback-functions.js`

One of the most important JavaScript concepts.

---

Functions can be passed as values.

Example:

```js
function greet(){
}
```

```js
myFunc(greet);
```

---

Receiving Function:

```js
function myFunc(callback){
    callback();
}
```

---

# What is a Callback?

A function passed into another function.

---

Visual:

```text
Function A
      │
      ▼
Function B
```

Function B is callback.

---

# Real World Usage

Callbacks are used in:

* Event Listeners
* DOM Manipulation
* Timers
* Promises Foundation
* Asynchronous JavaScript

---

# 1️⃣2️⃣ Functions Returning Functions

📄 File: `55-functions-returning-functions.js`

Functions can return other functions.

---

Example:

```js
function myFunc(){

    function hello(){
        return "Hello World";
    }

    return hello;
}
```

---

Result:

```js
const ans = myFunc();

ans();
```

Output:

```text
Hello World
```

---

# Why Important?

This concept is the foundation of:

* Closures
* Functional Programming
* Higher Order Functions
* React Hooks

---

# 🧠 Mental Model

Functions are special values.

They can:

```text
Be Created
Be Stored
Be Passed
Be Returned
Be Executed
```

---

# 🚨 Common Beginner Mistakes

### Forgetting Return

Wrong:

```js
function add(a,b){
    a+b;
}
```

Result:

```text
undefined
```

---

Correct:

```js
function add(a,b){
    return a+b;
}
```

---

### Confusing Parameters and Arguments

```js
function add(a,b)
```

Parameters

```js
add(2,3)
```

Arguments

---

### Using var

Avoid:

```js
var name = "Pankaj";
```

Prefer:

```js
const name = "Pankaj";
```

---

### Expecting Function Expressions to Hoist

Wrong:

```js
hello();

const hello = function(){};
```

Error ❌

---

# 🎯 What You Learned

After completing this module you should understand:

✅ Function Declaration

✅ Function Expression

✅ Arrow Functions

✅ Parameters

✅ Arguments

✅ Return Values

✅ Hoisting

✅ Nested Functions

✅ Lexical Scope

✅ Scope Chain

✅ Block Scope

✅ Function Scope

✅ Default Parameters

✅ Rest Parameters

✅ Parameter Destructuring

✅ Callback Functions

✅ Functions Returning Functions

---

# 🚀 Next Module

➡️ Array Methods

In the next section you'll learn:

* forEach()
* map()
* filter()
* reduce()
* find()
* sort()
* every()
* some()

These methods will help you write cleaner and more powerful JavaScript code with less looping and less repetition. 🔥
