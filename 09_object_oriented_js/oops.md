# 🚀 Object Oriented JavaScript (OOP) - Complete Beginner Guide

## 📌 Introduction

Is folder me hum JavaScript ke Object Oriented Programming (OOP) concepts ko basic se advanced level tak samjhenge.

Agar aap beginner hain aur aapko lagta hai ki:

* `this` keyword confusing hai
* `call`, `apply`, `bind` samajh nahi aata
* Prototype kya hota hai pata nahi
* Classes aur Inheritance ka concept clear nahi hai

Toh ye folder aapke liye hai.

Har file previous concept par build karti hai, isliye files ko sequence me padhna recommended hai.

---

# 📚 Learning Roadmap

```
Objects
   ↓
Methods
   ↓
this Keyword
   ↓
call / apply / bind
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
   ↓
Getters & Setters
   ↓
Static Methods
```

---

# 71. Object Methods and this Keyword

### Method Kya Hota Hai?

Object ke andar rakha hua function **method** kehlata hai.

```js
const person = {
    firstName: "Pankaj",
    age: 16,
    about(){
        console.log(this.firstName);
    }
}
```

### this Kya Hai?

`this` current object ko refer karta hai.

```js
person.about();
```

Output:

```js
Pankaj
```

Yahan `this` => person object.

---

# 72. this Keyword in Browser

```js
function myFunc(){
    console.log(this);
}
```

Browser me normal function call karne par:

```js
this === window
```

Output:

```js
Window {...}
```

### Strict Mode

```js
"use strict";
```

Agar strict mode laga diya:

```js
this === undefined
```

---

# 73. Call, Apply and Bind

Kabhi kabhi kisi function ka `this` manually set karna hota hai.

## Call

```js
about.call(user1, "coding", "Arijit");
```

Syntax:

```js
functionName.call(thisValue,arg1,arg2)
```

---

## Apply

Same as call.

Difference:

Arguments array me pass karte hain.

```js
about.apply(user1, ["coding","Arijit"]);
```

---

## Bind

Function immediately execute nahi karta.

Naya function return karta hai.

```js
const func = about.bind(user1);
func();
```

---

# 74. Losing this Context

```js
const myFunc = user1.about;
myFunc();
```

Output:

```js
undefined undefined
```

Kyun?

Kyuki function object se alag ho gaya.

Solution:

```js
const myFunc = user1.about.bind(user1);
```

Ab `this` permanently user1 ho jayega.

---

# 75. Arrow Functions and this

Arrow functions ka apna `this` nahi hota.

Ye surrounding scope se `this` lete hain.

```js
const user = {
    firstName:"Pankaj",
    about:()=>{
        console.log(this.firstName);
    }
}
```

Output:

```js
undefined
```

### Important Rule

Object methods ke liye arrow function use mat karo.

✅ Good

```js
about(){
}
```

❌ Bad

```js
about:()=>{
}
```

---

# 76. Method Shorthand

Purana Syntax:

```js
about:function(){
}
```

Modern Syntax:

```js
about(){
}
```

Dono same hain.

Modern syntax readable hai.

---

# 77. Factory Function Pattern

Factory Function ek function hota hai jo object create karke return karta hai.

```js
function createUser(){
    const user = {};
    return user;
}
```

Use:

```js
const user1 = createUser();
```

Problem:

Har user ke liye methods dobara create ho rahe hain.

Memory waste hoti hai.

---

# 78. Sharing Methods Between Objects

Solution:

Methods ko alag object me rakho.

```js
const userMethods = {
    about(){},
    is18(){}
}
```

Fir reference assign karo.

```js
user.about = userMethods.about;
```

Ab sab users same function use karenge.

Memory save hogi.

---

# 79. Object.create() and Prototype Linking

Best solution.

```js
const user = Object.create(userMethods);
```

Ye hidden connection create karta hai.

```js
user ---> userMethods
```

Agar property user me na mile:

JavaScript automatically prototype me search karega.

Is process ko Prototype Chain kehte hain.

---

# 80. **proto** and Prototype Chain

```js
const obj2 = Object.create(obj1);
```

Structure:

```js
obj2
  ↓
obj1
```

Agar:

```js
obj2.key2
```

obj2 me nahi mili?

Toh JS obj1 me search karega.

Isi ko Prototype Chain bolte hain.

---

# 81. Function Prototype Property

JavaScript me function bhi object hota hai.

```js
function hello(){}
```

Function ke paas ek special property hoti hai:

```js
hello.prototype
```

Output:

```js
{}
```

Hum methods add kar sakte hain.

```js
hello.prototype.sing = function(){
}
```

Important:

Sirf functions ke paas prototype property hoti hai.

---

# 82. Constructor Function + Prototype

Factory function ko aur optimize karte hain.

```js
function CreateUser(){
}
```

Methods:

```js
CreateUser.prototype.about = function(){}
```

Objects:

```js
const user = Object.create(CreateUser.prototype);
```

Ab methods prototype me store honge.

Memory efficient solution.

---

# 83. new Keyword

Interview Favorite Question 🚀

```js
const user = new CreateUser();
```

### new Keyword Internally

Step 1:

```js
this = {}
```

Step 2:

Prototype link create karta hai.

```js
this.__proto__ = CreateUser.prototype
```

Step 3:

Constructor run karta hai.

Step 4:

```js
return this
```

Automatically object return karta hai.

---

# 84. hasOwnProperty()

for...in loop own aur inherited dono properties deta hai.

```js
for(let key in user)
```

Filter:

```js
user.hasOwnProperty(key)
```

Output:

Sirf object ki own properties.

---

# 85. Array Prototype Analysis

```js
let arr = [1,2,3];
```

Actually:

```js
let arr = new Array(1,2,3);
```

Array methods:

```js
push()
pop()
map()
filter()
```

Sab Array.prototype se aate hain.

```js
Array.prototype
```

---

# 86. ES6 Classes

Modern syntax.

```js
class CreateUser{
}
```

Ye internally prototype hi use karti hai.

Class koi naya mechanism nahi hai.

Ye Prototype ka syntactic sugar hai.

```js
class User{
    constructor(name){
        this.name = name;
    }

    about(){
    }
}
```

---

# 87. Class Inheritance

Inheritance matlab parent ki properties aur methods child ko milna.

```js
class Dog extends Animal{
}
```

Relationship:

```js
Animal
   ↑
 Dog
```

Dog Animal ke methods use kar sakta hai.

---

# 88. super Keyword

Parent constructor call karne ke liye.

```js
super(name,age);
```

Ye Animal constructor execute karta hai.

```js
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
    }
}
```

---

# 89. Method Overriding

Parent aur Child me same method ho sakta hai.

```js
eat(){
}
```

Child version parent version ko replace kar deta hai.

```js
Dog.eat()
```

Dog wala execute hoga.

---

# 90. Getters and Setters

Normal Method:

```js
person.fullName()
```

Getter:

```js
get fullName(){
}
```

Use:

```js
person.fullName
```

Function jaisa lagta hi nahi.

---

### Setter

```js
set fullName(value){
}
```

Use:

```js
person.fullName = "LP Coder";
```

Setter automatically run ho jayega.

---

# 91. Static Methods and Properties

Static methods object par nahi, class par call hote hain.

```js
class Person{
    static classInfo(){
    }
}
```

Call:

```js
Person.classInfo();
```

Wrong:

```js
person1.classInfo();
```

Static properties:

```js
Person.desc
```

---

# 92. Function Execution Context

Jab function call hota hai:

```js
getFullName();
```

JavaScript execution context create karta hai.

Usme:

### 1. Variables

```js
let myVar
```

### 2. Arguments

```js
arguments
```

### 3. this

```js
this
```

store hote hain.

Execution complete hone par context remove ho jata hai.

---

# 🎯 Important Interview Questions

### Difference between call, apply and bind?

| Method | Execute Immediately | Arguments        |
| ------ | ------------------- | ---------------- |
| call   | Yes                 | Normal           |
| apply  | Yes                 | Array            |
| bind   | No                  | Returns Function |

---

### Arrow Function vs Normal Function?

| Arrow                        | Normal            |
| ---------------------------- | ----------------- |
| Own this nahi                | Own this hota hai |
| Lexical this                 | Dynamic this      |
| Object methods ke liye avoid | Recommended       |

---

### Prototype Chain Kya Hai?

Property na mile toh JS parent prototype me search karta hai.

---

### new Keyword Kya Karta Hai?

1. Empty object create
2. this set
3. Prototype link
4. Object return

---

### Class Kya Hai?

Class JavaScript me Prototype ka modern syntax hai.

---

# 🏁 Conclusion

Agar aapne file 71 se 92 tak sequence me samajh li:

✅ Objects              ✅ Methods         ✅ this Keyword   ✅ call/apply/bind
✅ Factory Functions    ✅ Prototype       ✅ Constructor Functions
✅ new Keyword          ✅ Classes         ✅ Inheritance
✅ Getters & Setters    ✅ Static Methods  ✅ Execution Context

Sab clear ho jayega aur aap JavaScript OOP ka strong foundation build kar lenge.

Happy Coding 🚀
