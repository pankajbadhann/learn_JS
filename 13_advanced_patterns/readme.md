# 🚀 Advanced JavaScript Patterns - Input Events & Performance Optimization

## 📖 Introduction

Is folder me hum JavaScript ke kuch important real-world concepts ki foundation rakh rahe hain.

Abhi folder me sirf **Input Events** ka example hai, lekin isi concept ke upar future me:

* Debouncing
* Throttling
* Search Suggestions
* API Optimization
* Performance Improvement
* Real-Time Search
* Auto Complete Features

jaise advanced topics build honge.

Agar aap modern web applications (Google Search, YouTube Search, Amazon Search, etc.) banana chahte hain to ye concepts samajhna bahut zaroori hai.

---

# 📂 Project Structure

```text
13_advanced_patterns/
│
├── index.html
├── app.js
└── style.css
```

---

# 🌐 index.html

Ye file ek simple input field create karti hai.

```html
<h1>Input Events</h1>
<input type="text" id="input-event">
```

Output:

```text
Input Events

[____________]
```

User jo bhi type karega usko JavaScript detect karegi.

---

# ⚡ app.js

## Element Select Karna

```js
const myInput = document.getElementById("input-event");
```

Yahan hum input box ko select kar rahe hain.

HTML:

```html
<input id="input-event">
```

JavaScript:

```js
document.getElementById("input-event");
```

Ab myInput variable ke paas input element ka reference aa gaya.

---

# 🎯 Input Event

```js
myInput.addEventListener("input", (e)=>{
    console.log(e.target.value);
});
```

Jab bhi user kuch type karega ye event fire hoga.

Example:

User type karta hai:

```text
p
```

Console:

```text
p
```

Fir:

```text
pa
```

Console:

```text
pa
```

Fir:

```text
pan
```

Console:

```text
pan
```

Aur aise hi continue.

---

# Understanding Event Object

```js
(e)
```

Yeh event object hai.

Browser automatically event ki information deta hai.

Example:

```js
myInput.addEventListener("input",(e)=>{
    console.log(e);
})
```

Console me bahut saari information milegi.

---

## e.target

```js
e.target
```

Target matlab jis element par event hua.

Output:

```html
<input id="input-event">
```

---

## e.target.value

```js
e.target.value
```

Input box ki current value deta hai.

Example:

User ne type kiya:

```text
Pankaj
```

Output:

```text
Pankaj
```

---

# Why Not Use This?

Aap soch sakte ho:

```js
console.log(myInput.value);
```

Ye bhi kaam karega.

Lekin professional developers prefer karte hain:

```js
e.target.value
```

Kyunki event listener ke andar directly event ke source se value mil jati hai.

Ye zyada flexible aur reusable approach hai.

---

# Different Input Related Events

JavaScript me input handle karne ke kai events hote hain.

Sabka behavior alag hai.

---

## 1. input Event ⭐ Recommended

```js
input
```

Ye event har character type hone par fire hota hai.

Example:

Type:

```text
hello
```

Output:

```text
h
he
hel
hell
hello
```

Modern applications me mostly yehi use hota hai.

---

## 2. keyup Event

```js
keyup
```

Key release hone ke baad fire hota hai.

Example:

```js
input.addEventListener("keyup",()=>{
   console.log("keyup");
});
```

---

## 3. keydown Event

```js
keydown
```

Key press hote hi fire hota hai.

Example:

```js
input.addEventListener("keydown",()=>{
   console.log("keydown");
});
```

---

## 4. change Event

```js
change
```

Ye tab fire hota hai jab:

* Enter press karo
* Ya focus hatao

Example:

Type:

```text
Pankaj
```

Kuch nahi hoga.

Jab click bahar karoge:

```text
Pankaj
```

Tab event fire hoga.

---

## 5. keypress Event ❌

```js
keypress
```

Purana event hai.

Different browsers me inconsistent behavior deta hai.

Isi liye modern developers isse avoid karte hain.

---

# Event Flow Example

User type karta hai:

```text
P
```

Browser:

```text
keydown
↓
keypress
↓
input
↓
keyup
```

---

# Real World Problem

Current Code:

```js
myInput.addEventListener("input",(e)=>{
    console.log(e.target.value);
})
```

User type karta hai:

```text
pankaj
```

Characters:

```text
p
a
n
k
a
j
```

Function Call Count:

```text
6 Times
```

Har character par function call ho raha hai.

---

# Why Is This A Problem?

Agar sirf console print kar rahe hain to koi issue nahi.

Lekin maan lo:

```js
searchUser()
```

function API call kar raha hai.

Example:

```text
p
pa
pan
pank
panka
pankaj
```

To API 6 baar hit hogi.

Ye bahut expensive ho sakta hai.

---

# Example

User:

```text
pankaj
```

Without Optimization:

```text
API Call 1
API Call 2
API Call 3
API Call 4
API Call 5
API Call 6
```

Server par unnecessary load padta hai.

Application slow ho sakti hai.

---

# Solution

Isi problem ko solve karne ke liye hum use karte hain:

## Debouncing

Concept:

```text
Wait karo
User typing stop kare
Tab function execute karo
```

Example:

User:

```text
pankaj
```

Typing complete hone ke baad:

```text
1 API Call
```

Bas.

---

## Throttling

Concept:

```text
Fixed interval me function run karo
```

Example:

```text
Every 1 second
```

Chahe user kitni bhi baar type kare.

---

# Future Topics

Ye folder future me in advanced concepts ko cover karega:

---

## Debouncing

Use Cases:

* Search Bars
* Auto Suggestions
* API Calls

---

## Throttling

Use Cases:

* Scroll Events
* Resize Events
* Mouse Move Events

---

## Infinite Scrolling

Example:

* Instagram
* Facebook
* YouTube

---

## Search Suggestions

Example:

Google Search

```text
p
pa
pan
pank
pankaj
```

Suggestions dynamically aati hain.

---

## API Optimization

Server par unnecessary requests kam karna.

---

## Performance Optimization

Application ko fast aur responsive banana.

---

# Important Interview Questions

## Difference Between input and change Event?

### input

Har character par fire hota hai.

### change

Focus lose ya Enter par fire hota hai.

---

## Difference Between keydown and keyup?

### keydown

Key press hote hi.

### keyup

Key release hone ke baad.

---

## Why Not Use keypress?

* Deprecated
* Browser inconsistencies
* Modern projects me avoid kiya jata hai

---

## Why Use input Event?

* Real-time updates
* Search features
* Better user experience
* Modern standard

---

## What Problem Does Debouncing Solve?

Repeated function calls ko reduce karta hai.

---

# Summary

Is folder me humne seekha:

✅ Input Events

✅ Event Object

✅ e.target

✅ e.target.value

✅ input Event

✅ keyup Event

✅ keydown Event

✅ change Event

✅ keypress Event

✅ Real World Input Handling

✅ Performance Problems

✅ Debouncing Introduction

✅ Throttling Introduction

Ye chhota sa code future ke bahut bade concepts ki foundation hai. Agar aap is chapter ko achhe se samajh lete hain, to aage Debouncing, Throttling, Search Suggestions aur API Optimization samajhna bahut aasaan ho jayega. 🚀

---

# 🚀 Next Module

➡️ [Projects](../14_projects)

Next section me hum javascript implement karege aur amazing projects create karege:

* TicTacToe