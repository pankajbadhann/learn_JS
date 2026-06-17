# ⚡ JavaScript Sets, Maps & Iteration Basics

Welcome to a **very important advanced JavaScript module**.

Yahan se JavaScript ka level “beginner” se shift ho kar **real-world developer mindset** ban jata hai.

---

# 🤔 Why This Module Matters?

Ab tak humne seekha:

* Arrays (ordered data)
* Objects (key-value data)

Lekin real-world problems mein kuch limitations aati hain:

❌ Duplicate data remove karna hard
❌ Complex key-value relationships handle karna difficult
❌ Safe object property access missing
❌ Better data structures ki need

Isi liye JavaScript provide karta hai:

```text id="core1"
Set
Map
Optional Chaining
Iterables
```

---

# 📂 Files Overview

| File                                    | Topic                          |
| --------------------------------------- | ------------------------------ |
| 66-iterables-and-array-like-objects.js  | Iterables & Array-like Objects |
| 67-sets-data-structure.js               | Sets                           |
| 68-maps-data-structure.js               | Maps                           |
| 69-object-cloning-with-object-assign.js | Object Cloning                 |
| 70-optional-chaining.js                 | Optional Chaining              |

---

# 1️⃣ Iterables & Array-like Objects

📄 File: `66-iterables-and-array-like-objects.js`

---

# 🔁 What are Iterables?

Iterables wo data structures hote hain jinpar hum loop chala sakte hain:

```text id="iter1"
for...of loop support karta hai
```

---

## Examples of Iterables:

```js id="iter2"
String
Array
```

---

## Example:

```js id="iter3"
for(let char of "Pankaj"){
    console.log(char);
}
```

Output:

```text id="iter4"
P a n k a j
```

---

## Array Iteration:

```js id="iter5"
for(let item of ["a","b","c"]){
    console.log(item);
}
```

---

# 📦 Array-like Objects

Array-like objects wo hote hain:

```text id="like1"
✔ length property hoti hai
✔ index se access ho sakta hai
❌ but iterable nahi hote
```

---

## Example:

```js id="like2"
const str = "pankaj";
console.log(str[0]);
console.log(str.length);
```

---

## Important Mistake:

```js id="like3"
const obj = {a:1, b:2};

for(let item of obj){
   console.log(item);
}
```

❌ Error

Reason: Object iterable nahi hota

---

# 🧠 Summary:

| Type   | Iterable |
| ------ | -------- |
| String | ✅        |
| Array  | ✅        |
| Object | ❌        |

---

# 2️⃣ Set Data Structure

📄 File: `67-sets-data-structure.js`

---

# 🤔 What is a Set?

Set ek special data structure hai jo:

```text id="set1"
✔ Unique values store karta hai
✔ Duplicates allow nahi karta
✔ Order guarantee nahi deta
```

---

## Example:

```js id="set2"
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2);
numbers.add(3);
```

Output:

```text id="set3"
1, 2, 3
```

Duplicate remove ho jata hai automatically.

---

# 🔍 Important Methods:

## add()

```js id="set4"
numbers.add(10);
```

## has()

```js id="set5"
numbers.has(1); // true
```

---

# 🔁 Iterating Set:

```js id="set6"
for(let item of numbers){
    console.log(item);
}
```

---

# 🧠 Real Use Case:

### Remove duplicates:

```js id="set7"
const arr = [1,2,2,3,3,4];

const unique = new Set(arr);
```

---

## Count Unique Elements:

```js id="set8"
unique.size;
```

---

# ⚡ Mental Model:

```text id="set9"
Array → duplicates allowed
Set → only unique values
```

---

# 3️⃣ Map Data Structure

📄 File: `68-maps-data-structure.js`

---

# 🤔 What is a Map?

Map ek advanced key-value structure hai.

---

## Difference:

| Object             | Map             |
| ------------------ | --------------- |
| Keys mostly string | Any type of key |
| Less flexible      | Highly flexible |
| Normal use         | Advanced use    |

---

# 🧪 Example:

```js id="map1"
const person = new Map();
```

---

## Adding values:

```js id="map2"
person.set("name", "Pankaj");
person.set(1, "one");
person.set(true, "boolean");
```

---

## Getting values:

```js id="map3"
person.get(1);
```

---

# 🧠 Powerful Feature:

Map keys can be ANYTHING:

```js id="map4"
array, object, number, string
```

---

## Object as Key:

```js id="map5"
const userInfo = new Map();

userInfo.set({id:1}, {age:20});
```

---

# 🔁 Iterating Map:

```js id="map6"
for(let [key,value] of person){
    console.log(key, value);
}
```

---

# ⚡ Real Use Case:

```text id="map7"
User → Extra Info Mapping
```

Example:

```js id="map8"
user → {age, gender, role}
```

---

# 🧠 Map vs Object

| Feature   | Object         | Map        |
| --------- | -------------- | ---------- |
| Key type  | String         | Any        |
| Order     | Not guaranteed | Maintained |
| Size      | Manual         | .size      |
| Iteration | Harder         | Easy       |

---

# 4️⃣ Object Cloning

📄 File: `69-object-cloning-with-object-assign.js`

---

# 🤔 Why Cloning?

Objects reference type hote hain.

```js id="clone1"
const obj2 = obj1;
```

❌ Same memory reference

---

# 🧪 Problem:

```js id="clone2"
obj1.key3 = "value";
```

👉 obj2 bhi change ho jata hai

---

# ✔ Solution 1: Spread Operator

```js id="clone3"
const newObj = {...obj};
```

---

# ✔ Solution 2: Object.assign()

```js id="clone4"
const newObj = Object.assign({}, obj);
```

---

# 🧠 Difference:

| Method        | Modern | Easy |
| ------------- | ------ | ---- |
| Spread        | ✅      | ⭐⭐⭐  |
| Object.assign | Old    | ⭐⭐   |

---

# ⚡ Real Use Case:

* State management (React)
* Config duplication
* Safe data updates

---

# 5️⃣ Optional Chaining

📄 File: `70-optional-chaining.js`

---

# 🤔 Problem:

Nested object access risky hota hai:

```js id="opt1"
user.address.houseNumber
```

Agar address undefined hua:

❌ Error

---

# ✔ Solution:

```js id="opt2"
user?.address?.houseNumber
```

---

# 🧠 How it works:

```text id="opt3"
Agar left side undefined hai → stop
Error throw nahi karega
```

---

# Example:

```js id="opt4"
const user = {
    name: "Pankaj"
};
```

```js id="opt5"
user?.address?.city
```

Output:

```text id="opt6"
undefined
```

No crash 🚀

---

# 🌍 Real Use Case:

* API responses
* Backend data
* Optional fields

---

# 🧠 Final Mental Model

| Concept           | Meaning             |
| ----------------- | ------------------- |
| Set               | Unique values       |
| Map               | Flexible key-value  |
| Iterable          | Loop-able structure |
| Optional chaining | Safe access         |
| Cloning           | Safe object copy    |

---

# 🚨 Common Mistakes

### Using object for everything

❌ Wrong choice for complex mapping

---

### Forgetting Set uniqueness

```js id="mist1"
Set([1,1,2])
```

---

### Not using optional chaining

```js id="mist2"
user.address.city // crash risk
```

---

# 🎯 What You Learned

After this module:

✅ Iterables concept
✅ Array-like objects
✅ Set structure (unique data)
✅ Map structure (advanced key-value)
✅ Object cloning techniques
✅ Safe property access

---

# 🚀 Next Module

➡️ Object-Oriented JavaScript (OOP)

Next you'll learn:

* Prototype
* Classes
* Inheritance
* this keyword
* Method binding

This is where JavaScript becomes **true engineering level** 🔥
