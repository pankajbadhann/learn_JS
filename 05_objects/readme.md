# 🏷️ JavaScript Objects

Welcome to the Objects Module.

Ab tak hum Arrays use kar rahe the.

Example:

```js
const person = ["Pankaj", 21, "India"];
```

Ye kaam to karta hai...

Lekin ek problem hai.

```text
person[0] = Name
person[1] = Age
person[2] = Country
```

Kuch months baad kisi ko code samajhna mushkil ho jayega.

Isi problem ko solve karne ke liye JavaScript mein **Objects** hote hain.

---

# 🤔 What is an Object?

Object ek collection hota hai:

```text
Key → Value
```

Pairs ka.

Example:

```js
const person = {
  name: "Pankaj",
  age: 21,
  country: "India"
};
```

Yahan:

```text
name    → "Pankaj"
age     → 21
country → "India"
```

Keys meaningful hoti hain.

Isi wajah se Objects real-world applications mein bahut use hote hain.

---

# 🌍 Real World Example

User Data:

```js
const user = {
  id: 1,
  username: "pankaj",
  email: "abc@gmail.com",
  isLoggedIn: true
};
```

Product Data:

```js
const product = {
  title: "Laptop",
  price: 50000,
  stock: 20
};
```

Almost har modern application Objects use karti hai.

---

# 📂 Files Overview

| File                            | Topic                   |
| ------------------------------- | ----------------------- |
| 36-introduction-to-objects.js   | Object Basics           |
| 37-dot-vs-bracket-notation.js   | Dot vs Bracket Notation |
| 38-iterate-object-properties.js | Iterating Objects       |
| 39-computed-properties.js       | Computed Properties     |
| 40-spread-operator.js           | Spread Operator         |
| 41-object-destructuring.js      | Object Destructuring    |
| 42-objects-inside-arrays.js     | Objects Inside Arrays   |
| 43-nested-destructuring.js      | Nested Destructuring    |

---

# 1️⃣ Introduction to Objects

📄 File: `36-introduction-to-objects.js`

## Creating an Object

```js
const person = {
  name: "Pankaj",
  age: 16
};
```

Object contains:

```text
Key → name
Value → Pankaj

Key → age
Value → 16
```

---

## Multiple Data Types

Objects different types ki values store kar sakte hain.

```js
const person = {
  name: "Pankaj",
  age: 16,
  hobbies: ["Reading", "Coding"]
};
```

---

## Accessing Values

Bracket Notation:

```js
person["name"]
```

Output:

```text
Pankaj
```

---

Dot Notation:

```js
person.name
```

Output:

```text
Pankaj
```

---

## Adding New Properties

```js
person.gender = "Male";
```

Result:

```js
{
  name: "Pankaj",
  age: 16,
  gender: "Male"
}
```

---

# 2️⃣ Dot vs Bracket Notation

📄 File: `37-dot-vs-bracket-notation.js`

JavaScript mein object properties access karne ke do tarike hote hain.

---

# Dot Notation

```js
person.name
```

Simple aur readable.

---

# Bracket Notation

```js
person["name"]
```

Same output.

---

## When Dot Notation Fails

Property mein space ho:

```js
const person = {
  "person hobbies": ["Reading"]
};
```

Wrong:

```js
person.person hobbies
```

❌ Error

---

Correct:

```js
person["person hobbies"]
```

✅

---

## Dynamic Keys

```js
const key = "email";
```

```js
person[key] = "abc@gmail.com";
```

Output:

```js
{
  email: "abc@gmail.com"
}
```

Yahan bracket notation bahut important hai.

---

# Dot vs Bracket

| Dot         | Bracket         |
| ----------- | --------------- |
| Easy Syntax | Flexible        |
| Fixed Keys  | Dynamic Keys    |
| No Spaces   | Supports Spaces |

---

# 3️⃣ Iterating Object Properties

📄 File: `38-iterate-object-properties.js`

Kabhi kabhi object ki saari properties access karni hoti hain.

---

# for...in Loop

```js
for(let key in person){
  console.log(key);
}
```

Output:

```text
name
age
hobby
```

---

## Access Values

```js
for(let key in person){
  console.log(person[key]);
}
```

---

# Object.keys()

Returns array of keys.

```js
Object.keys(person)
```

Output:

```js
["name", "age", "hobby"]
```

---

## Using for...of

```js
for(let key of Object.keys(person)){
  console.log(person[key]);
}
```

---

# 4️⃣ Computed Properties

📄 File: `39-computed-properties.js`

Dynamic keys create karne ke liye use hota hai.

---

## Example

```js
const key1 = "objkey1";
const value1 = "myvalue1";
```

---

Without Computed Properties:

```js
{
  key1: value1
}
```

Output:

```js
{
  key1: "myvalue1"
}
```

---

With Computed Properties:

```js
{
  [key1]: value1
}
```

Output:

```js
{
  objkey1: "myvalue1"
}
```

Notice difference.

Variable ki value key ban gayi.

---

# Why Useful?

Forms

API Responses

Dynamic Data

Configuration Objects

---

# 5️⃣ Spread Operator

📄 File: `40-spread-operator.js`

Spread operator:

```js
...
```

Data ko unpack karta hai.

---

# Arrays

```js
const arr1 = [1,2];
const arr2 = [3,4];
```

```js
const arr3 = [...arr1, ...arr2];
```

Output:

```js
[1,2,3,4]
```

---

# Objects

```js
const obj1 = {
  name: "Pankaj"
};
```

```js
const obj2 = {
  age: 21
};
```

```js
const user = {
  ...obj1,
  ...obj2
};
```

Output:

```js
{
  name: "Pankaj",
  age: 21
}
```

---

## Duplicate Keys

```js
const obj1 = {
  name: "A"
};
```

```js
const obj2 = {
  name: "B"
};
```

```js
{
  ...obj1,
  ...obj2
}
```

Output:

```js
{
  name: "B"
}
```

Last value wins.

---

# 6️⃣ Object Destructuring

📄 File: `41-object-destructuring.js`

Destructuring ka matlab:

```text
Extract values from an object.
```

---

Without Destructuring

```js
const band = {
  bandName: "Led Zeppelin"
};
```

```js
const name = band.bandName;
```

---

With Destructuring

```js
const { bandName } = band;
```

Same result.

Cleaner code.

---

## Rename Variables

```js
const {
  bandName: name
} = band;
```

---

## Rest Properties

```js
const {
  bandName,
  ...rest
} = band;
```

Remaining properties rest object mein aa jayengi.

---

# 7️⃣ Objects Inside Arrays

📄 File: `42-objects-inside-arrays.js`

Real-world applications mein sabse common structure.

---

Example:

```js
const users = [
  {
    userId: 1,
    firstName: "Pankaj"
  },
  {
    userId: 2,
    firstName: "Rahul"
  }
];
```

---

Visual:

```text
Array
 ├── Object
 ├── Object
 └── Object
```

---

Access Data

```js
users[0].firstName
```

Output:

```text
Pankaj
```

---

Loop Through Users

```js
for(let user of users){
  console.log(user.firstName);
}
```

---

# Why Important?

Most APIs return data in this format.

Example:

```js
[
  { id: 1, name: "User1" },
  { id: 2, name: "User2" }
]
```

---

# 8️⃣ Nested Destructuring

📄 File: `43-nested-destructuring.js`

Advanced destructuring.

---

Normal Access

```js
users[0].firstName
```

---

Nested Destructuring

```js
const [
  { firstName },
  ,
  { gender }
] = users;
```

---

Output:

```text
firstName → Pankaj
gender → male
```

---

# 🧠 Objects vs Arrays

| Arrays          | Objects                |
| --------------- | ---------------------- |
| Ordered Data    | Key-Value Data         |
| Access by Index | Access by Key          |
| Best for Lists  | Best for Real Entities |
| 0,1,2,3...      | name, age, email...    |

---

# 🌍 Real World Usage

Objects are everywhere:

### User

```js
{
  name: "Pankaj",
  email: "abc@gmail.com"
}
```

### Product

```js
{
  title: "Laptop",
  price: 50000
}
```

### API Response

```js
{
  success: true,
  data: {}
}
```

### React Props

```js
{
  title: "Hello"
}
```

---

# 🚨 Common Beginner Mistakes

### Using Dot Notation with Spaces

Wrong:

```js
person.person hobbies
```

Correct:

```js
person["person hobbies"]
```

---

### Forgetting Brackets for Dynamic Keys

Wrong:

```js
{
  key1: value
}
```

Output:

```js
{
  key1: value
}
```

---

Correct:

```js
{
  [key1]: value
}
```

Output:

```js
{
  objkey1: value
}
```

---

### Confusing Arrays and Objects

Array:

```js
users[0]
```

Object:

```js
user.name
```

---

# 🎯 What You Learned

After completing this module, you should understand:

✅ What Objects Are

✅ Key-Value Pairs

✅ Dot Notation

✅ Bracket Notation

✅ Dynamic Properties

✅ Object Iteration

✅ Object.keys()

✅ Computed Properties

✅ Spread Operator

✅ Object Destructuring

✅ Rest Properties

✅ Objects Inside Arrays

✅ Nested Destructuring

✅ Real-World Object Structures

---

# 🚀 Next Module

➡️ [Functions](../06_functions)

In the next section you'll learn:

* Function Declaration
* Function Expressions
* Arrow Functions
* Scope
* Hoisting
* Callbacks

Objects store data.

Functions make that data do something useful. 🔥
