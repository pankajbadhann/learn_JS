# 🚀 Object Oriented JavaScript (OOP)

Welcome to the Object Oriented JavaScript Module.

Ab tak hum JavaScript ke fundamentals seekh chuke hain:

✅ Variables     ✅ Conditions    ✅ Loops
✅ Arrays        ✅ Objects       ✅ Functions
✅ Array Methods

Ab ek bahut important question aata hai...

Agar hume real world applications banani ho to data aur functionality ko organize kaise karein?

Example:

* User
* Product
* Cart
* Bank Account
* Employee
* Student

In sabke paas data bhi hota hai aur actions bhi.

Isi problem ko solve karne ke liye Object Oriented Programming (OOP) use ki jaati hai.

JavaScript traditionally class-based language nahi thi.

JavaScript Prototype-Based Language hai.

Lekin ES6 ke baad Classes introduce hui jo internally prototypes hi use karti hain.

Is module me hum Object Methods se start karenge aur dheere dheere Classes aur Inheritance tak pahunch jayenge.

---

# 📚 Learning Roadmap

```text
Object Methods
      ↓
this Keyword
      ↓
call apply bind
      ↓
Factory Functions
      ↓
Prototype
      ↓
Constructor Functions
      ↓
new Keyword
      ↓
Classes
      ↓
Inheritance
```

---

# 📂 Files Overview

| File | Topic                  |
| ---- | ---------------------- |
| 71   | Object Methods & this  |
| 72   | this in Browser        |
| 73   | call apply bind        |
| 74   | Losing this Context    |
| 75   | Arrow Functions & this |
| 76   | Method Shorthand       |
| 77   | Factory Functions      |
| 78   | Sharing Methods        |
| 79   | Object.create()        |
| 80   | Prototype Chain        |

---

# 71️⃣ Object Methods and this Keyword

File:

```text
71-object-methods-and-this-keyword.js
```

---

# What is a Method?

Object ke andar rakha hua function method kehlata hai.

Example:

```js
const person = {
    firstName: "Pankaj",
    age: 16,
    about(){
        console.log("Hello");
    }
}
```

Yahan:

```text
about()
```

ek method hai.

---

# Why Not Create Separate Functions?

Agar har user ke liye alag function likhenge:

```js
person1Info();
person2Info();
person3Info();
```

Code repetitive ho jayega.

Isliye method use karte hain.

---

# Understanding this

Example:

```js
function personInfo(){
    console.log(this.firstName);
}
```

Yahan `this` ka matlab:

```text
Current Object
```

---

Example:

```js
person1.about();
```

Yahan:

```text
this === person1
```

---

Example:

```js
person2.about();
```

Yahan:

```text
this === person2
```

---

Mental Model:

```text
Object.method()

Dot ke left side wala object
becomes this
```

```js
person1.about()
```

```text
this → person1
```

---

# 72️⃣ this Keyword in Browser

File:

```text
72-this-keyword-in-browser.js
```

---

Example:

```js
function myFunc(){
    console.log(this);
}
```

Call:

```js
myFunc();
```

Browser me output:

```js
Window
```

---

# Why?

Browser me global object hota hai:

```js
window
```

Aur normal function call me:

```js
this === window
```

---

Example:

```js
console.log(this === window);
```

Output:

```text
true
```

---

# Strict Mode

```js
"use strict";
```

Ab:

```js
this === undefined
```

---

Why Important?

Future me bugs avoid karne ke liye.

Modern JavaScript mostly strict mode me hi run hoti hai.

---

# 73️⃣ call apply bind

File:

```text
73-call-apply-and-bind.js
```

---

# Problem

Kabhi kabhi hume manually decide karna hota hai:

```text
this kis object ko point kare
```

---

Example

```js
function about(){
}
```

Ye function kisi object ke andar nahi hai.

Ab hume manually this set karna padega.

---

# call()

Syntax:

```js
func.call(thisValue,arg1,arg2)
```

Example:

```js
about.call(user1,"coding","Arijit");
```

---

Visual:

```text
about
   ↓
user1 becomes this
```

---

# apply()

Same as call.

Difference:

Arguments array me pass karte hain.

```js
about.apply(user1,["coding","Arijit"]);
```

---

# bind()

Sabse important.

Immediately execute nahi karta.

Naya function return karta hai.

```js
const newFunc = about.bind(user1);
```

Later:

```js
newFunc();
```

---

Real World Example

Event Handlers

React

Callbacks

Timers

---

# Quick Difference

| Method | Execute     |
| ------ | ----------- |
| call   | Immediately |
| apply  | Immediately |
| bind   | Later       |

---

# 74️⃣ Losing this Context

File:

```text
74-losing-this-context.js
```

---

Example:

```js
user1.about();
```

Works perfectly.

---

But:

```js
const myFunc = user1.about;
```

Ab:

```js
myFunc();
```

Output:

```text
undefined undefined
```

---

Why?

Kyuki:

```text
Function object se alag ho gaya
```

JavaScript ko pata hi nahi:

```text
this kis object ko refer kare
```

---

Visual

```text
user1
  |
 about()

↓

const myFunc = user1.about

Only function copied
Object lost
```

---

Solution

```js
const myFunc =
user1.about.bind(user1);
```

Now:

```text
this permanently points
to user1
```

---

# 75️⃣ Arrow Functions and this

File:

```text
75-arrow-functions-and-this.js
```

---

One of the most confusing topics.

But actually simple hai.

---

Normal Function

```js
about(){
}
```

Own this create karta hai.

---

Arrow Function

```js
about: () => {}
```

Own this create nahi karta.

---

Arrow Function kya karta hai?

```text
Surrounding scope se this le leta hai
```

---

Example:

```js
const user = {
    firstName:"Pankaj",

    about:()=>{
        console.log(this.firstName);
    }
}
```

Output:

```text
undefined
```

---

Why?

Arrow function ka this:

```text
user object nahi
```

Balki:

```text
window
```

ya outer scope hota hai.

---

Rule

Object Methods ke liye:

❌ Arrow Function

```js
about:()=>{
}
```

---

✅ Normal Function

```js
about(){
}
```

---

# 76️⃣ Object Method Shorthand

File:

```text
76-object-method-shorthand.js
```

---

Old Syntax

```js
const user = {
    about:function(){
    }
}
```

---

Modern Syntax

```js
const user = {
    about(){
    }
}
```

---

Both Same

Difference:

```text
Less code
Better readability
```

---

Recommended:

```js
about(){
}
```

---

# 77️⃣ Factory Function Pattern

File:

```text
77-factory-function-pattern.js
```

---

# What is Factory Function?

Function jo object create kare aur return kare.

Example:

```js
function createUser(){
    const user = {};
    return user;
}
```

---

Why Use It?

Agar 100 users create karne hain:

Without Factory:

```js
const user1={}
const user2={}
const user3={}
```

Boring.

---

Factory Function:

```js
const user1 =
createUser(...)

const user2 =
createUser(...)
```

---

Benefits

✅ Reusable

✅ Clean

✅ Scalable

---

Problem

Har baar:

```js
about()
is18()
```

functions dobara create ho rahe hain.

Memory waste.

---

# 78️⃣ Sharing Methods Between Objects

File:

```text
78-sharing-methods-between-objects.js
```

---

Problem

Agar:

```js
100000 users
```

toh:

```js
100000 copies
```

of:

```js
about()
is18()
```

banengi.

---

Solution

Methods alag object me rakho.

```js
const userMethods = {
    about(){},
    is18(){}
}
```

---

Then:

```js
user.about =
userMethods.about
```

---

Benefit

```text
One Method
Many Users
```

---

Memory Saved ✅

---

Problem Still Exists

Har baar likhna pad raha:

```js
user.about =
userMethods.about

user.is18 =
userMethods.is18
```

Agar 50 methods ho?

Painful.

---

Next File solves this.

---

# 79️⃣ Object.create() and Prototype Linking

File:

```text
79-object-create-and-prototype-linking.js
```

---

Magic Starts Here 🚀

---

Instead of:

```js
const user = {};
```

Use:

```js
const user =
Object.create(userMethods);
```

---

What Happens?

JavaScript hidden link create karta hai.

```text
user
   ↓
userMethods
```

---

Now:

```js
user.about()
```

JavaScript search karega:

Step 1

```text
user me about hai?
```

No.

Step 2

```text
userMethods me about hai?
```

Yes.

Execute.

---

This hidden connection becomes foundation of:

```text
Prototype
Inheritance
Classes
```

---

# 80️⃣ **proto** and Prototype Chain

File:

```text
80-proto-and-prototype-chain.js
```

---

Most Important Topic of Entire OOP Section.

---

Example

```js
const obj1 = {
    key1:"value1"
}
```

```js
const obj2 =
Object.create(obj1);
```

Visual:

```text
obj2
  ↓
obj1
```

---

Now:

```js
obj2.key1
```

JavaScript Search:

```text
obj2
```

Not Found

↓

```text
obj1
```

Found

↓

Return value

---

This process is called:

```text
Prototype Chain
```

---

Visual

```text
obj2
 ↓
obj1
 ↓
Object.prototype
 ↓
null
```

---

# Understanding **proto**

Every object has:

```js
__proto__
```

It stores reference of parent object.

Example:

```js
console.log(obj2.__proto__);
```

Output:

```text
obj1
```

---

Important

```text
__proto__
```

and

```text
[[Prototype]]
```

same concept represent karte hain.

---

# Mental Model of Prototype Chain

Imagine:

```text
Child asks Parent
Parent asks Grand Parent
Grand Parent asks Great Grand Parent
```

Until:

```text
Value Found
```

or

```text
null reached
```

---

# ⚡ JavaScript Object Oriented Programming (OOP) - Part 2

Welcome to the second part of JavaScript OOP.

Part 1 me humne seekha:

* Object Methods
* this Keyword
* call, apply, bind
* Factory Functions
* Shared Methods
* Object.create()
* **proto**
* Prototype Chain

Ab hum JavaScript ke sabse important OOP concepts seekhenge jo interviews aur real-world projects dono me bahut use hote hain.

---

# 📂 Files Covered

| File | Topic                            |
| ---- | -------------------------------- |
| 81   | Function Prototype Property      |
| 82   | Constructor Function + Prototype |
| 83   | new Keyword                      |
| 84   | hasOwnProperty                   |
| 85   | Array Prototype Analysis         |
| 86   | ES6 Classes                      |
| 87   | Class Inheritance                |
| 88   | super Keyword                    |
| 89   | Method Overriding                |
| 90   | Getters & Setters                |
| 91   | Static Methods & Properties      |
| 92   | Function Execution Context       |

---

# 1️⃣ Function Prototype Property

📄 File: `81-function-prototype-property.js`

JavaScript me function sirf function nahi hota.

Function ek special object bhi hota hai.

Example:

```js
function hello(){
    console.log("Hello");
}
```

Function ke paas kuch built-in properties hoti hain:

```js
console.log(hello.name);
console.log(hello.prototype);
```

---

## Function = Function + Object

Hum apni properties bhi add kar sakte hain.

```js
hello.myProperty = "Unique Value";
```

```js
console.log(hello.myProperty);
```

---

## Prototype Property

Har normal function ke paas ek special property hoti hai:

```js
hello.prototype
```

Default:

```js
{}
```

Ye ek object hota hai.

---

## Hum Methods Add Kar Sakte Hain

```js
hello.prototype.sing = function(){
    return "la la la";
}
```

Ab prototype ke andar method store ho gaya.

---

## Important

Sirf functions ke paas:

```js
prototype
```

property hoti hai.

Objects ke paas nahi.

```js
const obj = {};
console.log(obj.prototype);
```

Output:

```text
undefined
```

---

# 2️⃣ Constructor Function + Prototype

📄 File: `82-constructor-function-prototype.js`

Ab hum prototype ko real use me dekhenge.

---

## Problem

Factory function me:

```js
user.about = function(){}
```

Har object ke liye new copy create ho rahi thi.

Memory waste.

---

## Solution

Methods prototype me rakho.

```js
function createUser(name, age){
    const user = Object.create(createUser.prototype);

    user.name = name;
    user.age = age;

    return user;
}
```

---

Methods:

```js
createUser.prototype.about = function(){
    return `${this.name}`;
};
```

---

## Benefit

1000 users create honge.

Method kitni baar banega?

```text
Only 1 Time
```

Sab objects same method share karenge.

---

## Connection

```text
user1
 ↓
__proto__
 ↓
createUser.prototype
```

Isi wajah se:

```js
user1.about()
```

work karta hai.

---

# 3️⃣ new Keyword

📄 File: `83-new-keyword-and-constructor-functions.js`

Interview Favourite Question:

> new keyword internally kya karta hai?

---

Example:

```js
const user1 = new CreateUser("Pankaj",16);
```

---

## Step 1

Empty object create hota hai.

```js
{}
```

---

## Step 2

this us object ko point karta hai.

```js
this = {}
```

---

## Step 3

Properties add hoti hain.

```js
this.name = "Pankaj";
```

---

## Step 4

Prototype link create hota hai.

```text
user.__proto__
        ↓
CreateUser.prototype
```

---

## Step 5

Object return hota hai.

```js
return this;
```

---

## Constructor Naming Rule

Constructor Function:

```js
function CreateUser(){}
```

First letter Capital.

Ye convention hai.

---

# 4️⃣ hasOwnProperty()

📄 File: `84-hasownproperty-method.js`

for...in loop own properties aur inherited properties dono return karta hai.

---

Example:

```js
for(let key in user1){
    console.log(key);
}
```

Output:

```text
firstName
age
about
is18
```

---

Problem:

```text
about
is18
```

prototype se aaye.

---

## Solution

```js
user1.hasOwnProperty(key)
```

---

Example

```js
if(user1.hasOwnProperty(key)){
    console.log(key);
}
```

---

Output

```text
firstName
age
email
address
```

---

## Rule

Own Property:

```text
Object ke andar directly present
```

Prototype Property:

```text
Prototype se inherited
```

---

# 5️⃣ Array Prototype Analysis

📄 File: `85-array-prototype-analysis.js`

Question:

```js
let arr = [1,2,3];
```

push(), pop(), map(), filter() kahan se aate hain?

---

Answer:

```text
Array.prototype
```

---

Internally:

```js
let arr = new Array(1,2,3);
```

---

Prototype Chain:

```text
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

---

## Important

Array bhi Object hai.

```js
typeof []
```

Output:

```text
object
```

---

Check:

```js
Object.getPrototypeOf(arr);
```

---

# 6️⃣ ES6 Classes

📄 File: `86-es6-classes.js`

ES6 (2015) me class syntax introduce hua.

---

Example

```js
class CreateUser{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    about(){
        return this.name;
    }
}
```

---

Object Create

```js
const user1 = new CreateUser("Pankaj",16);
```

---

## Important Truth

Classes actually:

```text
Prototype Based System
```

ke upar syntax sugar hain.

---

Behind The Scenes:

```js
class User{}
```

almost same concept hai:

```js
function User(){}
```

with prototype methods.

---

# 7️⃣ Class Inheritance

📄 File: `87-class-inheritance-with-extends.js`

Inheritance ka matlab:

```text
Parent ke features Child ko mil jana
```

---

Example

```js
class Animal{}
```

```js
class Dog extends Animal{}
```

---

Dog automatically access kar sakta hai:

```js
eat()
isCute()
```

jo Animal class me defined hain.

---

## Real World Examples

```text
Animal → Dog

Vehicle → Car

Person → Student
```

---

# 8️⃣ super Keyword

📄 File: `88-super-keyword.js`

Child class ke constructor me parent constructor call karne ke liye use hota hai.

---

Example

```js
class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age);
        this.speed = speed;
    }
}
```

---

Without super:

```text
Error
```

---

## Why?

Parent constructor ki properties initialize karni hoti hain.

```js
this.name
this.age
```

---

Flow:

```text
Dog Constructor
      ↓
super()
      ↓
Animal Constructor
```

---

# 9️⃣ Method Overriding

📄 File: `89-method-overriding.js`

Child class parent ke method ko replace kar sakti hai.

---

Parent:

```js
eat(){
    return "Animal Eating";
}
```

---

Child:

```js
eat(){
    return "Dog Eating";
}
```

---

Output:

```text
Dog Eating
```

---

## Search Order

```text
Dog
 ↓
Animal
```

JS pehle child me method search karta hai.

Mil gaya?

Use it.

Nahi mila?

Parent me search karo.

---

# 🔟 Getters and Setters

📄 File: `90-getters-and-setters.js`

Normal Method:

```js
person.fullName()
```

---

Getter:

```js
get fullName(){
    return `${this.firstName} ${this.lastName}`;
}
```

Use:

```js
person.fullName
```

Notice:

```text
No ()
```

---

## Setter

```js
set fullName(value){
}
```

Usage:

```js
person.fullName = "LP Coder";
```

---

Internally:

```js
firstName = "LP"
lastName = "Coder"
```

---

## Benefits

✅ Cleaner Syntax

✅ Validation

✅ Controlled Access

---

# 1️⃣1️⃣ Static Methods and Properties

📄 File: `91-static-methods-and-properties.js`

Normal Method:

```js
person.eat();
```

Object se call hota hai.

---

Static Method:

```js
Person.classInfo();
```

Class se call hota hai.

---

Example

```js
static classInfo(){
    return "Person Class";
}
```

---

Call:

```js
Person.classInfo();
```

---

Wrong:

```js
person1.classInfo();
```

Error

---

## Static Property

```js
static desc = "Static Property";
```

Use:

```js
Person.desc
```

---

## Real Examples

```js
Math.random()
Date.now()
Object.keys()
```

Ye sab static methods hain.

---

# 1️⃣2️⃣ Function Execution Context

📄 File: `92-function-execution-context.js`

JavaScript kisi function ko execute karne se pehle uska execution context create karta hai.

---

Example

```js
function getFullName(first,last){
}
```

---

Call

```js
getFullName("Pankaj","Badhan");
```

---

Execution Context Contains

### Variables

```js
let myVar;
```

---

### Arguments

```js
"Pankaj"
"Badhan"
```

---

### this

```js
this
```

---

### Function Body

Execution Instructions

---

## arguments Object

```js
console.log(arguments);
```

Output:

```text
Arguments(2)
```

---

Contains:

```text
0 → Pankaj
1 → Badhan
```

---

## Execution Flow

```text
Global Execution Context
          ↓
Function Call
          ↓
Function Execution Context
          ↓
Return
          ↓
Destroyed
```

---

# 🧠 Complete OOP Roadmap

```text
Objects
 ↓
Methods
 ↓
this
 ↓
call apply bind
 ↓
Factory Functions
 ↓
Shared Methods
 ↓
Object.create()
 ↓
__proto__
 ↓
Prototype
 ↓
Prototype Chain
 ↓
Constructor Functions
 ↓
new Keyword
 ↓
ES6 Classes
 ↓
Inheritance
 ↓
super
 ↓
Method Overriding
 ↓
Getter Setter
 ↓
Static Methods
 ↓
Execution Context
```

---

# 🚀 Next Module

➡️ [JavaScript Execution Context, Hoisting & Closures](../10_javascript_intervals)

In the next section you'll learn:

* Global Execution Context
* Hoisting
* Temporal Dead Zone
* Scope Chain
* Lexical Environment
* Closures
* Private Variables
* Function Factories

These concepts will help you understand how JavaScript actually works behind the scenes and are extremely important for interviews and advanced development. 🔥
