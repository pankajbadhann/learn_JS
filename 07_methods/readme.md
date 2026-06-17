# ⚡ JavaScript Array Methods

Welcome to one of the most powerful modules of JavaScript.

Agar tumhe JavaScript mein **real-world development** karni hai (React, Backend, APIs, Data handling), to ye module tumhari daily life ka part banne wala hai.

---

# 🤔 Why Array Methods?

Ab tak hum loops use karke arrays handle kar rahe the:

```js id="loop1"
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```

Problem:

❌ Code long
❌ Repetitive
❌ Hard to read

---

Array Methods solve this problem:

> “Less code, more power”

---

# 📂 Files Overview

| File                 | Topic   |
| -------------------- | ------- |
| 56-foreach-method.js | forEach |
| 57-map-method.js     | map     |
| 58-filter-method.js  | filter  |
| 59-reduce-method.js  | reduce  |
| 60-sort-method.js    | sort    |
| 61-find-method.js    | find    |
| 62-every-method.js   | every   |
| 63-some-method.js    | some    |
| 64-fill-method.js    | fill    |
| 65-splice-method.js  | splice  |

---

# 1️⃣ forEach()

📄 File: `56-foreach-method.js`

## What it does?

Array ke har element pe function run karta hai.

---

## Example:

```js id="fe1"
numbers.forEach((number, index)=>{
    console.log(number, index);
});
```

---

## Important Point:

```text id="fe2"
❌ forEach returns nothing (undefined)
```

---

## Real Use Case:

User list print karna:

```js id="fe3"
users.forEach(user=>{
    console.log(user.firstName);
});
```

---

## Mental Model:

```text id="fe4"
Array → Each Item → Function runs
```

---

# 2️⃣ map()

📄 File: `57-map-method.js`

## What it does?

Array ke har element ko transform karke **naya array return karta hai**

---

## Example:

```js id="map1"
const squares = numbers.map(num => num * num);
```

---

## Output:

```text id="map2"
New Array Created
```

---

## Key Point:

```text id="map3"
map → always returns a new array
```

---

## Real Use Case:

User names extract karna:

```js id="map4"
users.map(user => user.firstName);
```

---

# 3️⃣ filter()

📄 File: `58-filter-method.js`

## What it does?

Condition ke basis par elements filter karta hai.

---

## Example:

```js id="f1"
const even = numbers.filter(n => n % 2 === 0);
```

---

## Output:

```text id="f2"
Only elements that match condition
```

---

## Real Use Case:

Price filter:

```js id="f3"
products.filter(p => p.price < 500);
```

---

## Mental Model:

```text id="f4"
Condition True → Keep Element
Condition False → Remove Element
```

---

# 4️⃣ reduce()

📄 File: `59-reduce-method.js`

## What it does?

Array ko reduce karke **single value** banata hai.

---

## Example:

Sum of numbers:

```js id="r1"
numbers.reduce((acc, curr)=>{
    return acc + curr;
}, 0);
```

---

## Working:

```text id="r2"
accumulator + currentValue → result
```

---

## Real Use Case:

Cart total:

```js id="r3"
cart.reduce((total, item)=>{
    return total + item.price;
}, 0);
```

---

## Output:

```text id="r4"
Single Value (Number / Object / String)
```

---

# 5️⃣ sort()

📄 File: `60-sort-method.js`

## What it does?

Array ko sort karta hai.

---

## ⚠️ Important:

By default sort treats values as strings.

```js id="s1"
[1200, 5, 9, 410].sort()
```

Wrong output ❌

---

## Correct Sorting:

### Ascending:

```js id="s2"
numbers.sort((a,b)=>a-b);
```

### Descending:

```js id="s3"
numbers.sort((a,b)=>b-a);
```

---

## Real Use Case:

Price sorting:

```js id="s4"
products.sort((a,b)=>a.price - b.price);
```

---

# 6️⃣ find()

📄 File: `61-find-method.js`

## What it does?

First matching element return karta hai.

---

## Example:

```js id="fi1"
const result = users.find(user => user.id === 3);
```

---

## Output:

```text id="fi2"
Single object or undefined
```

---

## Difference:

```text id="fi3"
filter → array
find → single element
```

---

# 7️⃣ every()

📄 File: `62-every-method.js`

## What it does?

Check karta hai:

> “Kya sab elements condition satisfy karte hain?”

---

## Example:

```js id="e1"
numbers.every(n => n % 2 === 0);
```

---

## Output:

```text id="e2"
true / false
```

---

## Real Use Case:

Cart validation:

```js id="e3"
cart.every(item => item.price < 50000);
```

---

# 8️⃣ some()

📄 File: `63-some-method.js`

## What it does?

Check karta hai:

> “Kya kam se kam 1 element condition satisfy karta hai?”

---

## Example:

```js id="so1"
numbers.some(n => n % 2 === 0);
```

---

## Output:

```text id="so2"
true / false
```

---

## Difference:

| Method | Condition           |
| ------ | ------------------- |
| every  | All must pass       |
| some   | At least one passes |

---

# 9️⃣ fill()

📄 File: `64-fill-method.js`

## What it does?

Array ko fixed value se fill karta hai.

---

## Example:

```js id="fi1"
new Array(5).fill(0);
```

Output:

```text id="fi2"
[0,0,0,0,0]
```

---

## Replace Values:

```js id="fi3"
arr.fill(0, 2, 5);
```

---

# 🔟 splice()

📄 File: `65-splice-method.js`

## What it does?

Array ko modify karta hai:

* delete
* insert
* replace

---

## Delete:

```js id="sp1"
arr.splice(1,2);
```

---

## Insert:

```js id="sp2"
arr.splice(1,0,"new item");
```

---

## Replace:

```js id="sp3"
arr.splice(1,2,"a","b");
```

---

## Important:

```text id="sp4"
splice → original array modify karta hai
```

---

# 🧠 forEach vs map vs filter vs reduce

| Method  | Return  | Use       |
| ------- | ------- | --------- |
| forEach | ❌ None  | Looping   |
| map     | ✅ Array | Transform |
| filter  | ✅ Array | Filtering |
| reduce  | ✅ Value | Summarize |

---

# 🌍 Real World Usage

### E-commerce

```js id="rw1"
products.filter(p => p.price < 1000)
```

---

### Cart Total

```js id="rw2"
cart.reduce((t,i)=>t+i.price,0)
```

---

### User Names

```js id="rw3"
users.map(u => u.name)
```

---

### Validation

```js id="rw4"
cart.every(i => i.price > 0)
```

---

# 🚨 Common Mistakes

### Using forEach for return

```js id="m1"
const result = arr.forEach(...)
```

❌ Wrong

---

### Forgetting return in map

```js id="m2"
arr.map(n => {
   n*2
})
```

❌ undefined values

---

### sort confusion

```js id="m3"
[1,100,20].sort()
```

❌ string sort

---

# 🎯 What You Learned

After this module:

✅ Loop without for-loop
✅ Transform arrays (map)
✅ Filter data (filter)
✅ Reduce to single value
✅ Sort data correctly
✅ Find specific element
✅ Validate arrays
✅ Work with real-world data

---

# 🚀 Next Module

➡️ [Sets, Maps & Advanced Iteration](../08_sets_maps_chaining)

Next you'll learn:

* Set (unique values)
* Map (key-value advanced structure)
* Iterables
* Chaining methods

This is where JavaScript starts becoming **real engineering level** 🔥
