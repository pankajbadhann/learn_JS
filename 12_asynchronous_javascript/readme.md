# ⚡ Asynchronous JavaScript

Welcome to the Asynchronous JavaScript Module.

Ab tak hum JavaScript ke basic concepts seekh chuke hain:

* Variables
* Data Types
* Arrays
* Objects
* Functions
* DOM Manipulation
* Events

Lekin ek important problem abhi bhi baaki hai...

Agar koi task complete hone me time lagaye to?

Examples:

* API se data fetch karna
* Database se data lana
* File read karna
* Timer lagana
* User ke click ka wait karna

Agar JavaScript in sab tasks ke complete hone ka wait karegi to poori application freeze ho jayegi.

Isi problem ko solve karne ke liye JavaScript me aata hai:

# 🚀 Asynchronous JavaScript

---

# 🤔 What is Synchronous Programming?

Synchronous programming me code line-by-line execute hota hai.

Example:

```js
console.log("Start");

console.log("Middle");

console.log("End");
```

Output:

```text
Start
Middle
End
```

Har line next line ke execute hone se pehle complete hoti hai.

---

# Problem with Synchronous Programming

Suppose:

```js
console.log("Start");

for(let i=0;i<1000000000;i++){
}

console.log("End");
```

JavaScript pehle loop complete karegi.

Tab jaake next line chalegi.

Result:

```text
Browser freeze ho sakta hai
```

---

# 🤔 What is Asynchronous Programming?

Asynchronous Programming me long-running tasks background me execute hote hain.

Meanwhile JavaScript baaki code execute karti rehti hai.

Example:

```js
console.log("Start");

setTimeout(()=>{
    console.log("Hello");
},2000);

console.log("End");
```

Output:

```text
Start
End
Hello
```

---

# 🎯 Why Asynchronous JavaScript?

Because real-world applications constantly perform tasks like:

✅ API Calls

✅ Timers

✅ User Events

✅ File Uploads

✅ Database Operations

✅ Network Requests

Without blocking the UI.

---

# 📂 Files Overview

| File                | Topic                                   |
| ------------------- | --------------------------------------- |
| 132.js              | setTimeout & Event Loop                 |
| 133.js              | setInterval                             |
| 134.js              | Callback Functions                      |
| 135.js              | Callback Hell                           |
| 136.js              | Introduction to Promises                |
| 137.js              | Functions Returning Promises            |
| 138.js              | Promise + setTimeout                    |
| 139.js              | Promise Chaining                        |
| 140.js              | Refactoring Callback Hell with Promises |
| 141.js              | AJAX Theory                             |
| 142.js              | XMLHttpRequest Basics                   |
| 143.js              | Nested XHR Requests                     |
| 144.js              | XHR with Promises                       |
| 145.js              | Fetch API                               |
| 146.js              | Async Await                             |
| moreAboutPromise.js | Promise Chaining Practice               |

---

# 1️⃣ setTimeout()

📄 File: 132.js

Used to execute code after a specified delay.

Syntax:

```js
setTimeout(callback,time)
```

Example:

```js
setTimeout(()=>{
   console.log("Hello");
},1000);
```

Output after 1 second:

```text
Hello
```

---

# clearTimeout()

Used to cancel a timeout.

```js
const id = setTimeout(()=>{
   console.log("Hello");
},1000);

clearTimeout(id);
```

Output:

```text
Nothing
```

Timer execute hi nahi hoga.

---

# Important Interview Question

## Does setTimeout stop code execution?

No.

Example:

```js
console.log("Start");

setTimeout(()=>{
   console.log("Timeout");
},1000);

console.log("End");
```

Output:

```text
Start
End
Timeout
```

---

# 2️⃣ setInterval()

📄 File: 133.js

Runs code repeatedly after fixed intervals.

Syntax:

```js
setInterval(callback,time)
```

Example:

```js
setInterval(()=>{
   console.log("Hello");
},1000);
```

Output:

```text
Hello
Hello
Hello
...
```

Every second.

---

# clearInterval()

Stops interval execution.

```js
clearInterval(intervalId);
```

---

# Real Project Example

In this file:

```js
body.style.background = rgb;
```

Background color changes every second.

Button click:

```js
clearInterval(intervalId);
```

Stops color changing.

---

# 3️⃣ Callback Functions

📄 File: 134.js

Function passed as an argument to another function.

Example:

```js
function myFunc(callback){
   callback();
}
```

Usage:

```js
myFunc(()=>{
   console.log("Hello");
});
```

---

# Why Callbacks?

Useful when:

* Event Handling
* Timers
* API Requests
* Async Tasks

---

# Success & Failure Callbacks

Example:

```js
getTwoNumbersAndAdd(
    4,
    4,
    addTwoNumbers,
    onFail
);
```

Success:

```js
8
```

Failure:

```text
Wrong data type
```

---

# 4️⃣ Callback Hell

📄 File: 135.js

One callback inside another callback.

Example:

```js
setTimeout(()=>{
    setTimeout(()=>{
        setTimeout(()=>{
        });
    });
});
```

Visual:

```text
Callback
 └── Callback
      └── Callback
           └── Callback
```

This creates:

# Pyramid of Doom 😭

Problems:

❌ Hard to Read

❌ Hard to Debug

❌ Hard to Maintain

---

# changeText()

Used to update headings after delays.

Each heading waits for previous heading.

This is a practical Callback Hell example.

---

# 5️⃣ Promise

📄 File: 136.js

Promise represents a future value.

States:

```text
Pending
Resolved
Rejected
```

---

# Creating Promise

```js
const promise = new Promise(
(resolve,reject)=>{
}
);
```

Resolve:

```js
resolve(data);
```

Reject:

```js
reject(error);
```

---

# Consuming Promise

```js
promise
.then(data=>{
})
.catch(error=>{
});
```

---

# 6️⃣ Functions Returning Promises

📄 File: 137.js

Better practice.

Instead of storing Promise:

```js
function ricePromise(){
   return new Promise(...)
}
```

Usage:

```js
ricePromise()
.then(...)
.catch(...)
```

Reusable and cleaner.

---

# 7️⃣ Promise + setTimeout

📄 File: 138.js

Promise can wait before resolving.

Example:

```js
setTimeout(()=>{
   resolve();
},2000);
```

Result:

```text
Resolved after 2 seconds
```

---

# 8️⃣ Promise Chaining

📄 File: 139.js

One of the most important Promise concepts.

Example:

```js
myPromise()
.then(...)
.then(...)
.then(...)
```

Output:

```text
foo
foobar
foobarbaaz
```

---

# Why Promise Chaining?

Avoids:

```text
Callback Hell
```

Provides:

```text
Cleaner Flow
```

---

# Important Rule

```js
then()
```

Always returns a Promise.

That's why chaining works.

---

# 9️⃣ Refactoring Callback Hell

📄 File: 140.js

Earlier:

```text
Callback Hell
```

Now:

```js
changeText(...)
.then(...)
.then(...)
.then(...)
```

Much cleaner.

---

# Error Handling

Single catch handles all errors.

```js
.catch(error=>{
   console.log(error);
})
```

---

# 🔟 AJAX

📄 File: 141.js

AJAX means:

```text
Asynchronous JavaScript And XML
```

Used to communicate with servers without refreshing page.

---

# Why AJAX?

Without AJAX:

```text
Reload Page
Get Data
Show Data
```

With AJAX:

```text
Get Data in Background
Update UI
No Reload
```

---

# Modern Data Format

Earlier:

```text
XML
```

Now:

```text
JSON
```

---

# 1️⃣1️⃣ XMLHttpRequest (XHR)

📄 File: 142.js

Old way of sending HTTP requests.

---

# Basic Flow

Create:

```js
const xhr = new XMLHttpRequest();
```

Open:

```js
xhr.open("GET",URL);
```

Load:

```js
xhr.onload = function(){}
```

Send:

```js
xhr.send();
```

---

# JSON Parsing

Server sends:

```text
JSON String
```

Convert:

```js
JSON.parse(response)
```

Into:

```js
JavaScript Object
```

---

# 1️⃣2️⃣ Nested XHR Requests

📄 File: 143.js

One request depends on another request.

Example:

```js
GET posts
↓
Extract ID
↓
GET specific post
```

This again creates callback nesting.

---

# Problems

❌ Callback Hell

❌ Complex Logic

❌ Difficult Debugging

---

# 1️⃣3️⃣ XHR with Promises

📄 File: 144.js

Convert XHR into Promise.

```js
function sendRequest(method,url){
   return new Promise(...)
}
```

Usage:

```js
sendRequest(...)
.then(...)
.then(...)
.catch(...)
```

Cleaner than nested callbacks.

---

# 1️⃣4️⃣ Fetch API

📄 File: 145.js

Modern way of sending HTTP requests.

---

# Basic Syntax

```js
fetch(URL)
```

Returns:

```js
Promise
```

---

# Handling Response

```js
fetch(URL)
.then(response=>{
   return response.json();
})
.then(data=>{
});
```

---

# Error Handling

```js
.catch(error=>{
});
```

---

# Why Fetch?

✅ Cleaner

✅ Promise Based

✅ Modern

✅ Widely Used

---

# 1️⃣5️⃣ Async Await

📄 File: 146.js

Most readable way to work with Promises.

---

# Async Function

```js
async function getData(){
}
```

Always returns a Promise.

---

# Await

```js
const response = await fetch(URL);
```

JavaScript waits for Promise resolution.

---

# Example

```js
const data = await response.json();
```

Looks synchronous.

Actually asynchronous.

---

# Error Handling

Use:

```js
try{
}
catch(error){
}
```

or

```js
.catch()
```

---

# Async Await Flow

```text
Fetch Request
      ↓
Wait
      ↓
Response
      ↓
Convert JSON
      ↓
Use Data
```

---

# Promise vs Async Await

Promise Style:

```js
fetch(URL)
.then(...)
.then(...)
.catch(...)
```

Async Await:

```js
const response = await fetch(URL);
```

Most developers prefer Async Await.

---

# Event Loop Mental Model

JavaScript is:

```text
Single Threaded
```

But it can handle asynchronous tasks using:

```text
Call Stack
Web APIs
Callback Queue
Event Loop
```

Flow:

```text
Code
 ↓
Call Stack
 ↓
Web API
 ↓
Callback Queue
 ↓
Event Loop
 ↓
Call Stack
```

This is the reason:

```js
setTimeout(()=>{},0)
```

does NOT execute immediately.

---

# 🚨 Common Beginner Mistakes

### Forgetting clearInterval()

Creates infinite interval.

---

### Thinking setTimeout blocks code

Wrong ❌

---

### Forgetting return inside then()

Breaks chaining.

---

### Forgetting response.json()

Response won't become usable JS object.

---

### Forgetting await

Gets Promise instead of actual data.

Wrong:

```js
const data = fetch(URL);
```

Correct:

```js
const data = await fetch(URL);
```

---

# 🚀 Next Module

➡️ [Advance Patterns](../13_advanced_patterns)

In the next section you'll learn:

Debouncing
