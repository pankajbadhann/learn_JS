# 📚 JavaScript DOM Manipulation - Complete Beginner Guide

## 🎯 Introduction

Is folder me hum **DOM (Document Object Model)** ko step-by-step seekhenge. DOM JavaScript ka sabse important topic hai kyunki isi ki help se hum HTML elements ko select, modify aur user ke actions (events) ko handle karte hain.

Agar aap websites me dynamic behavior add karna chahte hain, Todo App banana chahte hain, forms handle karna chahte hain ya interactive UI banana chahte hain, to DOM manipulation seekhna bahut zaroori hai.

---

# 📖 What is DOM?

DOM ka full form hai:

**D**ocument **O**bject **M**odel

Browser HTML page ko ek tree structure me convert kar deta hai jise DOM Tree kehte hain.

Example:

```html
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
```

DOM Tree:

```text
Document
 └── html
      └── body
           ├── h1
           └── p
```

JavaScript DOM ki help se is tree ke kisi bhi node ko access aur modify kar sakti hai.

---

# 📂 Project Structure

## 104-dom-introduction.js

### Theory

DOM ka basic introduction.

```js
console.dir(document);
```

### Kya karta hai?

* Pure HTML document ko object ki tarah show karta hai.
* Browser HTML ko object me convert karta hai.
* Is object ke through hum elements access karte hain.

---

# Selecting Elements

DOM me sabse pehla kaam hota hai HTML elements ko select karna.

---

## 105-get-element-by-id.js

### getElementById()

```js
const heading = document.getElementById("main-heading");
```

### Use

Jab kisi element ka unique ID ho.

Example:

```html
<h1 id="main-heading">Hello</h1>
```

```js
document.getElementById("main-heading");
```

---

## 106-query-selector.js

### querySelector()

```js
document.querySelector("#main-heading");
```

### querySelectorAll()

```js
document.querySelectorAll(".nav-item");
```

### Difference

| Method             | Result                 |
| ------------------ | ---------------------- |
| querySelector()    | First matching element |
| querySelectorAll() | All matching elements  |

Example:

```js
document.querySelector(".header");
document.querySelector("#main-heading");
document.querySelectorAll(".nav-item");
```

---

# Text Manipulation

---

## 107-textcontent-vs-innertext.js

### textContent

Hidden text bhi return karta hai.

```js
element.textContent
```

### innerText

Sirf visible text return karta hai.

```js
element.innerText
```

Example:

```html
<h1>
 Hello
 <span style="display:none">World</span>
</h1>
```

```js
textContent => Hello World
innerText => Hello
```

---

# Styling Elements

---

## 108-change-styles.js

JavaScript se CSS apply karna.

```js
mainHeading.style.backgroundColor = "blue";
```

Example:

```js
element.style.color = "red";
element.style.fontSize = "40px";
```

Important:

CSS Property:

```css
background-color
```

JavaScript:

```js
backgroundColor
```

---

# Attributes

---

## 109-get-set-attributes.js

### Get Attribute

```js
element.getAttribute("href");
```

### Set Attribute

```js
element.setAttribute("href", "https://google.com");
```

Example:

```js
link.setAttribute("target", "_blank");
```

---

# Multiple Elements

---

## 110-htmlcollection-vs-nodelist.js

### HTMLCollection

```js
document.getElementsByClassName()
```

### NodeList

```js
document.querySelectorAll()
```

Difference:

| HTMLCollection | NodeList          |
| -------------- | ----------------- |
| Live           | Static            |
| forEach nahi   | forEach available |

---

## 111-iterate-collections.js

Collection ko iterate karna.

Methods:

### for loop

```js
for(let i=0;i<arr.length;i++)
```

### for...of

```js
for(let item of arr)
```

### forEach

```js
arr.forEach(item=>{})
```

---

# HTML Insert Karna

---

## 112-innerhtml.js

### innerHTML

HTML ko read aur replace karta hai.

```js
element.innerHTML
```

Example:

```js
headline.innerHTML = "<h1>Hello</h1>";
```

Warning:

User input directly innerHTML me mat daalo (XSS risk).

---

# DOM Traversing

---

## 113-dom-traversing.js

DOM me parent-child relationship samajhna.

### Parent

```js
element.parentNode
```

### Children

```js
element.children
```

### Child Nodes

```js
element.childNodes
```

### Root Node

```js
document.getRootNode()
```

---

# Classes

---

## 114-classlist.js

Class manipulate karna.

### Add

```js
element.classList.add("bg-dark");
```

### Remove

```js
element.classList.remove("bg-dark");
```

### Toggle

```js
element.classList.toggle("bg-dark");
```

### Contains

```js
element.classList.contains("bg-dark");
```

---

# Creating Elements

---

## 115-add-elements-innerhtml.js

innerHTML se element add karna.

```js
todoList.innerHTML += "<li>New Todo</li>";
```

Problem:

Har baar pura HTML re-render hota hai.

---

## 116-create-append-remove.js

### Create

```js
document.createElement("li");
```

### Append

```js
parent.append(child);
```

### Prepend

```js
parent.prepend(child);
```

### Remove

```js
element.remove();
```

Ye modern aur best approach hai.

---

## 117-insert-adjacent-html.js

HTML insert karne ka efficient method.

```js
element.insertAdjacentHTML(position, html);
```

Positions:

```text
beforebegin
afterbegin
beforeend
afterend
```

---

## 118-clone-nodes.js

Element ki copy banana.

```js
node.cloneNode(true);
```

true → child nodes bhi copy honge.

---

## 119-legacy-dom-methods.js

Purane DOM methods.

```js
appendChild()
insertBefore()
replaceChild()
removeChild()
```

Aaj bhi interview me puchhe ja sakte hain.

---

# Live Collections

---

## 120-live-htmlcollection.js

HTMLCollection live hota hai.

Agar DOM change hua to collection automatically update ho jata hai.

```js
getElementsByTagName()
```

---

# Element Dimensions

---

## 121-element-dimensions.js

Element ka size nikalna.

```js
element.getBoundingClientRect();
```

Returns:

```js
width
height
top
left
right
bottom
```

---

# Events

Events user actions hote hain.

Examples:

* click
* keypress
* mouseover
* submit

---

## 122-events-intro.js

### addEventListener()

```js
button.addEventListener("click", function(){
    console.log("clicked");
});
```

Sabse recommended way.

---

## 123-this-in-events.js

Normal function me:

```js
this === clicked element
```

Example:

```js
button.addEventListener("click", function(){
    console.log(this);
});
```

Arrow function me this alag behave karta hai.

---

## 124-multiple-event-listeners.js

Multiple buttons pe listener lagana.

```js
buttons.forEach(button=>{
    button.addEventListener(...)
});
```

---

## 125-event-object.js

Browser callback ko event object deta hai.

```js
button.addEventListener("click",(e)=>{
    console.log(e);
});
```

Useful Properties:

```js
e.target
e.currentTarget
e.type
```

---

## 126-event-loop-demo.js

JavaScript Single Threaded hai.

Concepts:

* Call Stack
* Web APIs
* Callback Queue
* Event Loop

Heavy loop UI ko block kar sakta hai.

---

## 127-button-click-effects.js

Button click effect.

```js
e.target.style.backgroundColor = "yellow";
```

Practical DOM manipulation example.

---

# Mini Project

---

## 128-random-background-color.js

Random RGB color generate karna.

Formula:

```js
Math.floor(Math.random()*256)
```

RGB Range:

```text
0 → 255
```

Output:

```js
rgb(120, 40, 200)
```

---

## 129-keypress-mouse-events.js

### Keyboard Event

```js
keypress
```

```js
e.key
```

### Mouse Events

```js
mouseover
mouseleave
```

---

# Event Propagation

---

## 130-event-bubbling-capturing.js

DOM Event Flow:

```text
Capturing
↓
Target
↓
Bubbling
```

---

### Bubbling

Default behavior.

```text
child
parent
grandparent
body
```

---

### Capturing

```js
addEventListener("click", fn, true);
```

Third parameter:

```js
true
```

means capture phase.

---

### Event Delegation

Important Interview Topic ⭐

Instead of:

```js
100 listeners
```

Use:

```js
1 listener on parent
```

Example:

```js
parent.addEventListener("click",(e)=>{
    console.log(e.target);
});
```

Benefits:

* Better performance
* Less memory
* Dynamic elements support

---

# Final Project

---

## 131-todo-app.js

### Features

✅ Add Todo

✅ Remove Todo

✅ Mark Complete

✅ Event Delegation

---

### Form Submit

```js
e.preventDefault();
```

Page refresh rokta hai.

---

### Create New Todo

```js
document.createElement("li");
```

---

### Remove Todo

```js
targetedLi.remove();
```

---

### Mark Complete

```js
textDecoration = "line-through";
```

---

# Important DOM Interview Questions

### Difference between:

#### textContent vs innerText

* textContent hidden text bhi return karta hai.
* innerText sirf visible text.

---

#### HTMLCollection vs NodeList

* HTMLCollection live.
* NodeList static.

---

#### append vs appendChild

* append multiple values accept karta hai.
* appendChild sirf node accept karta hai.

---

#### Event Bubbling vs Capturing

* Bubbling → bottom to top.
* Capturing → top to bottom.

---

#### Event Delegation kya hai?

Parent par event listener lagana aur child events handle karna.

---

# DOM Learning Roadmap

1. DOM Introduction
2. Selecting Elements
3. Changing Text
4. Styling Elements
5. Attributes
6. Collections
7. Traversing
8. Classes
9. Creating Elements
10. Events
11. Event Object
12. Event Loop
13. Bubbling
14. Capturing
15. Event Delegation
16. Todo Project

---

# Conclusion

Agar aapne is folder ke saare examples ko practically run kar liya hai aur har file ka code khud likhne ki practice kar li hai, to aap DOM Manipulation ke beginner se intermediate level tak pahunch chuke hain.

Is folder me DOM ke lagbhag saare important concepts cover kiye gaye hain:

* Element Selection
* Text Manipulation
* Style Manipulation
* Attributes
* Collections
* Traversing
* ClassList
* Creating Elements
* Events
* Event Object
* Event Loop
* Event Bubbling
* Event Capturing
* Event Delegation
* Todo Application

Ab aap dynamic websites aur interactive web applications banana start kar sakte hain. 🚀

# 🚀 Next Module

➡️ [Asynchronous JavaScript](../12_asynchronous_javascript/)

Ab tak hum JavaScript ke sath browser me data render karna  sekh chuke hai.
But real websites ko to data api backend se recive hota hai jisko render hone me time lagta hai.
So that's why now we learn in

Next section me hum seekhenge:

* SetTimeOut
* callbackHell
* Promises
* async await
