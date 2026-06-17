# 📚 JavaScript DOM Manipulation Complete Notes (Part 1)

> Folder: `11_dom_manipulation`
>
> Is folder me hum JavaScript ka sabse important topic **DOM (Document Object Model)** seekhenge.
>
> DOM hi wo bridge hai jo JavaScript ko HTML aur CSS ke saath interact karne deta hai.
>
> Agar DOM nahi hota to JavaScript webpage ke elements ko change, update, create ya remove nahi kar pati.

---

# 📖 Table of Contents

1. DOM Introduction
2. Selecting Elements
3. Text Content Manipulation
4. Styling Elements
5. Attributes
6. HTMLCollection vs NodeList
7. Iteration Techniques
8. innerHTML
9. DOM Traversing
10. ClassList
11. Creating Elements
12. Inserting Elements
13. Cloning Nodes
14. Legacy Methods
15. Live HTMLCollection
16. Element Dimensions

---

# 104. DOM Introduction

## What is DOM?

DOM ka full form hai:

**Document Object Model**

Browser HTML ko read karta hai aur usko ek JavaScript object structure me convert kar deta hai.

Example:

```html
<h1>Hello</h1>
```

Browser internally isko object ki tarah represent karta hai.

```javascript
document
```

Ye pura webpage represent karta hai.

---

## Why DOM?

DOM ki help se hum:

* Text change kar sakte hain
* CSS change kar sakte hain
* New elements create kar sakte hain
* Elements delete kar sakte hain
* Events handle kar sakte hain

Example:

```javascript
document.body.style.backgroundColor = "yellow";
```

---

# 105. getElementById()

Sabse purana aur simple selector.

```javascript
const heading = document.getElementById("main-heading");
```

Browser ID ke basis par element return karta hai.

HTML:

```html
<h1 id="main-heading">Hello</h1>
```

JavaScript:

```javascript
console.log(heading);
```

---

## console.log vs console.dir

### console.log()

Element ko HTML format me show karta hai.

```javascript
console.log(element);
```

Output:

```html
<h1>Hello</h1>
```

---

### console.dir()

Element ki properties dikhata hai.

```javascript
console.dir(element);
```

Output:

```javascript
{
  innerText: "...",
  textContent: "...",
  style: ...
}
```

---

# 106. querySelector()

Modern way of selecting elements.

```javascript
document.querySelector()
```

CSS selector use karta hai.

---

## By ID

```javascript
document.querySelector("#main-heading");
```

---

## By Class

```javascript
document.querySelector(".header");
```

---

## By Tag

```javascript
document.querySelector("h1");
```

---

## querySelectorAll()

Saare matching elements return karta hai.

```javascript
document.querySelectorAll(".nav-item");
```

Returns:

```javascript
NodeList
```

---

# 107. textContent vs innerText

Dono text read karte hain.

Lekin difference hai.

---

## textContent

Hidden text bhi read karta hai.

```javascript
console.log(element.textContent);
```

Example:

```html
<h1>Hello <span style="display:none">World</span></h1>
```

Output:

```text
Hello World
```

---

## innerText

Sirf visible text read karta hai.

```javascript
console.log(element.innerText);
```

Output:

```text
Hello
```

---

## Text Change

```javascript
element.textContent = "New Text";
```

---

# 108. Changing Styles

CSS ko JavaScript se change kar sakte hain.

```javascript
element.style.color = "red";
```

---

Example:

```javascript
mainHeading.style.backgroundColor = "blue";
mainHeading.style.border = "5px solid green";
```

---

## Important

CSS:

```css
background-color
```

JavaScript:

```javascript
backgroundColor
```

Camel Case use hoti hai.

---

# 109. Get and Set Attributes

HTML attributes access karne ke liye:

```javascript
getAttribute()
```

---

## Get Attribute

```javascript
link.getAttribute("href");
```

Output:

```text
#home
```

---

## Set Attribute

```javascript
link.setAttribute(
  "href",
  "https://example.com"
);
```

---

## Another Example

```javascript
input.getAttribute("type");
```

Output:

```text
text
```

---

# 110. HTMLCollection vs NodeList

Multiple elements select karne par ye return hote hain.

---

## HTMLCollection

```javascript
document.getElementsByClassName()
```

Returns:

```javascript
HTMLCollection
```

---

## NodeList

```javascript
document.querySelectorAll()
```

Returns:

```javascript
NodeList
```

---

## Similarities

* Indexing hoti hai
* Length property hoti hai

```javascript
list[0]
list.length
```

---

## Difference

NodeList me directly:

```javascript
forEach()
```

available hota hai.

HTMLCollection me nahi.

---

# 111. Iterating Collections

Collection ko loop karna bahut common task hai.

---

## Simple For Loop

```javascript
for(let i=0;i<items.length;i++){
}
```

---

## For Of

```javascript
for(let item of items){
}
```

---

## forEach

```javascript
items.forEach(item=>{
});
```

NodeList me direct kaam karta hai.

---

## Convert Into Array

```javascript
Array.from(collection)
```

Example:

```javascript
const arr = Array.from(htmlCollection);
```

Ab saare array methods use kar sakte ho.

---

# 112. innerHTML

Element ke andar ka pura HTML return karta hai.

```javascript
element.innerHTML
```

---

Example:

```html
<div class="headline">
    <h1>Hello</h1>
</div>
```

```javascript
console.log(headline.innerHTML);
```

Output:

```html
<h1>Hello</h1>
```

---

## Change HTML

```javascript
headline.innerHTML =
"<h1>Changed</h1>";
```

---

## Add HTML

```javascript
headline.innerHTML +=
"<button>Learn More</button>";
```

---

## Warning

innerHTML repeatedly use karna performance ke liye expensive ho sakta hai.

---

# 113. DOM Traversing

DOM ek tree structure hai.

Example:

```html
html
 ├── head
 └── body
```

---

## Root Node

```javascript
document.getRootNode()
```

---

## childNodes

```javascript
node.childNodes
```

Children return karta hai.

---

## Parent Node

```javascript
element.parentNode
```

---

## Children

```javascript
element.children
```

Sirf element nodes return karta hai.

---

## Sibling Relation

Ek hi parent ke children sibling kehlate hain.

```html
<h1></h1>
<p></p>
```

Yeh siblings hain.

---

# 114. classList

CSS classes manipulate karne ke liye.

```javascript
element.classList
```

---

## Add Class

```javascript
element.classList.add("bg-dark");
```

---

## Remove Class

```javascript
element.classList.remove("bg-dark");
```

---

## Check Class

```javascript
element.classList.contains("container");
```

Returns:

```javascript
true
```

or

```javascript
false
```

---

## Toggle Class

```javascript
element.classList.toggle("bg-dark");
```

Agar class hai to remove.

Nahi hai to add.

---

# 115. Add Elements using innerHTML

```javascript
todoList.innerHTML +=
"<li>New Todo</li>";
```

Works.

---

## Problem

Har update me browser pura HTML re-parse karta hai.

Large applications me avoid karte hain.

---

# 116. Create, Append & Remove Elements

Best practice.

---

## Create Element

```javascript
const li =
document.createElement("li");
```

---

## Add Text

```javascript
li.textContent =
"Learn JavaScript";
```

---

## Append

Last me add karta hai.

```javascript
ul.append(li);
```

---

## Prepend

Start me add karta hai.

```javascript
ul.prepend(li);
```

---

## Remove

```javascript
li.remove();
```

---

# 117. insertAdjacentHTML()

Fast way to insert HTML.

```javascript
element.insertAdjacentHTML(
 position,
 html
)
```

---

Positions:

```javascript
beforebegin
afterbegin
beforeend
afterend
```

---

Example:

```javascript
todoList.insertAdjacentHTML(
 "beforeend",
 "<li>Learn JS</li>"
);
```

---

# 118. cloneNode()

Element ki copy banata hai.

```javascript
const clone =
element.cloneNode(true);
```

---

## true

Deep clone.

Children bhi copy honge.

---

## false

Sirf parent copy hoga.

---

# 119. Legacy DOM Methods

Purane browsers ke liye.

---

## appendChild()

```javascript
parent.appendChild(child);
```

---

## insertBefore()

```javascript
parent.insertBefore(
 newNode,
 referenceNode
);
```

---

## replaceChild()

```javascript
parent.replaceChild(
 newNode,
 oldNode
);
```

---

## removeChild()

```javascript
parent.removeChild(node);
```

---

# 120. Live HTMLCollection

HTMLCollection live hota hai.

Meaning:

DOM change hote hi automatically update ho jata hai.

Example:

```javascript
const items =
ul.getElementsByTagName("li");
```

Agar new li add karoge:

```javascript
ul.append(li);
```

Collection automatically update ho jayegi.

---

# 121. Element Dimensions

Element ki height aur width nikalne ke liye:

```javascript
element.getBoundingClientRect()
```

Example:

```javascript
const info =
sectionTodo.getBoundingClientRect();
```

Output:

```javascript
{
 width: ...,
 height: ...,
 top: ...,
 left: ...
}
```

---

Ye sab concepts DOM manipulation ki foundation hain. Inke bina events, projects aur advanced DOM samajhna mushkil hota hai.

Agla Part me hum **Events, Event Object, Event Loop, Bubbling, Capturing, Delegation aur Todo App Project** cover karenge.
