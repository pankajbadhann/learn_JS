# 📦 JavaScript Arrays

Welcome to the Arrays Module.

Ab tak hum variables mein sirf ek value store kar rahe the.

Example:

```js
let firstName = "Pankaj";
let age = 21;
```

Lekin agar 100 students ke names store karne ho to?

```js
let student1 = "Aman";
let student2 = "Rahul";
let student3 = "Neha";
...
```

😵 Bahut messy ho jayega.

Isi problem ko solve karne ke liye Arrays use kiye jate hain.

---

# 🤔 What is an Array?

Array ek **ordered collection of values** hota hai.

Ek hi variable ke andar multiple values store kar sakte hain.

Example:

```js
let fruits = ["Apple", "Mango", "Banana"];
```

Visual Representation:

```text
Index →   0        1        2
         ----------------------
Value → "Apple" "Mango" "Banana"
```

---

# 🎯 Why Arrays?

Arrays help us:

✅ Store multiple values

✅ Access values by index

✅ Iterate through data

✅ Manipulate collections easily

✅ Work with real-world data

---

# 📂 Files Overview

| File                               | Topic                     |
| ---------------------------------- | ------------------------- |
| 26-introduction-to-arrays.js       | Array Basics              |
| 27-array-methods.js                | push, pop, shift, unshift |
| 28-primitive-vs-reference-types.js | Primitive vs Reference    |
| 29-array-cloning-and-spread.js     | Cloning & Spread Operator |
| 30-for-loop-in-arrays.js           | for Loop with Arrays      |
| 31-const-arrays.js                 | Arrays with const         |
| 32-while-loop-in-arrays.js         | while Loop with Arrays    |
| 33-for-of-loop.js                  | for...of Loop             |
| 34-for-in-loop.js                  | for...in Loop             |
| 35-array-destructuring.js          | Array Destructuring       |

---

# 1️⃣ Introduction to Arrays

📄 File: `26-introduction-to-arrays.js`

## Creating Arrays

```js
let fruits = ["apple", "mango", "grapes"];
```

Numbers:

```js
let numbers = [1, 2, 3, 4];
```

Mixed Data:

```js
let mixed = [1, "hello", true, null];
```

JavaScript arrays can store different data types together.

---

## Accessing Elements

```js
fruits[0]
```

Output:

```text
apple
```

```js
fruits[2]
```

Output:

```text
grapes
```

---

## Modifying Elements

```js
fruits[1] = "banana";
```

Before:

```text
["apple", "mango", "grapes"]
```

After:

```text
["apple", "banana", "grapes"]
```

---

## typeof Array

```js
typeof fruits
```

Output:

```text
object
```

Many beginners think arrays have type "array".

Actually:

```text
Arrays are special objects.
```

---

## Checking Arrays Correctly

```js
Array.isArray(fruits);
```

Output:

```js
true
```

---

# 2️⃣ Array Methods

📄 File: `27-array-methods.js`

Array methods data add aur remove karne ke liye use hote hain.

---

# push()

End mein element add karta hai.

```js
fruits.push("banana");
```

Before:

```text
["apple", "mango"]
```

After:

```text
["apple", "mango", "banana"]
```

✅ Most used

✅ Fast

---

# pop()

End se element remove karta hai.

```js
let removed = fruits.pop();
```

Output:

```text
banana
```

---

# unshift()

Start mein element add karta hai.

```js
fruits.unshift("orange");
```

Result:

```text
["orange", "apple", "mango"]
```

---

# shift()

Start se element remove karta hai.

```js
fruits.shift();
```

---

## Performance Tip

Fast:

```text
push()
pop()
```

Slower:

```text
shift()
unshift()
```

Because entire array rearrange hota hai.

---

# 3️⃣ Primitive vs Reference Types

📄 File: `28-primitive-vs-reference-types.js`

Ye beginner ke liye sabse important concepts mein se ek hai.

---

# Primitive Types

```js
let num1 = 10;
let num2 = num1;
```

Memory:

```text
num1 → 10
num2 → 10
```

Independent copies banti hain.

```js
num1++;
```

Result:

```text
num1 = 11
num2 = 10
```

---

# Reference Types

Arrays copy nahi hote.

Reference copy hota hai.

```js
let array1 = ["item1"];
let array2 = array1;
```

Memory:

```text
array1 ──► [item1]
array2 ──► [item1]
```

Dono same array point kar rahe hain.

---

```js
array1.push("item2");
```

Output:

```text
array1 = ["item1","item2"]
array2 = ["item1","item2"]
```

⚠️ Dono change ho gaye.

---

# 4️⃣ Array Cloning & Spread Operator

📄 File: `29-array-cloning-and-spread.js`

Reference problem solve karne ke liye cloning use karte hain.

---

# Wrong Way

```js
let array2 = array1;
```

Same reference.

---

# Clone Using slice()

```js
let array2 = array1.slice(0);
```

---

# Clone Using concat()

```js
let array2 = [].concat(array1);
```

---

# Clone Using Spread Operator

```js
let array2 = [...array1];
```

Modern and most popular.

---

## Concatenate Arrays

```js
let arr1 = ["a"];
let arr2 = ["b"];
```

```js
let arr3 = [...arr1, ...arr2];
```

Output:

```text
["a","b"]
```

---

# 5️⃣ for Loop in Arrays

📄 File: `30-for-loop-in-arrays.js`

Most common way to iterate arrays.

---

```js
for(let i = 0; i < fruits.length; i++){
   console.log(fruits[i]);
}
```

---

# length Property

```js
fruits.length
```

Returns total elements.

Example:

```js
["apple","mango","banana"]
```

Output:

```text
3
```

---

# Last Element

```js
fruits[fruits.length - 1]
```

Very common interview question.

---

# 6️⃣ Arrays with const

📄 File: `31-const-arrays.js`

Many beginners get confused here.

---

```js
const fruits = ["apple","mango"];
```

Allowed:

```js
fruits.push("banana");
```

Why?

Because array content change ho raha hai.

Variable reference nahi.

---

Not Allowed:

```js
fruits = [];
```

Error ❌

---

# Important Rule

```text
Use const for arrays whenever possible.
```

Modern JavaScript best practice.

---

# 7️⃣ while Loop in Arrays

📄 File: `32-while-loop-in-arrays.js`

Array iterate karne ka old but useful way.

---

```js
let i = 0;

while(i < fruits.length){
   console.log(fruits[i]);
   i++;
}
```

Works exactly like for loop.

---

# 8️⃣ for...of Loop

📄 File: `33-for-of-loop.js`

Modern and beginner-friendly loop.

---

```js
for(let fruit of fruits){
   console.log(fruit);
}
```

Output:

```text
apple
mango
banana
```

---

## Why Use for...of?

Cleaner syntax.

No index handling.

Most preferred for arrays.

---

# 9️⃣ for...in Loop

📄 File: `34-for-in-loop.js`

Returns indexes.

---

```js
for(let index in fruits){
   console.log(index);
}
```

Output:

```text
0
1
2
```

---

Access Values:

```js
for(let index in fruits){
   console.log(fruits[index]);
}
```

---

## Difference

for...of:

```text
Returns Values
```

for...in:

```text
Returns Indexes
```

---

# 🔟 Array Destructuring

📄 File: `35-array-destructuring.js`

Destructuring means:

> Array values ko directly variables mein extract karna.

---

Without Destructuring

```js
let first = arr[0];
let second = arr[1];
```

---

With Destructuring

```js
let [first, second] = arr;
```

Cleaner and modern.

---

## Example

```js
const colors = ["red", "green", "blue"];
```

```js
let [c1, c2] = colors;
```

Result:

```text
c1 = red
c2 = green
```

---

## Skip Values

```js
let [first, , third] = colors;
```

Result:

```text
first = red
third = blue
```

---

## Rest Operator

```js
let [first, second, ...remaining] = colors;
```

Result:

```text
remaining = ["blue"]
```

---

# 🔥 Array Iteration Comparison

| Method   | Returns       |
| -------- | ------------- |
| for      | Index & Value |
| while    | Index & Value |
| for...of | Values        |
| for...in | Indexes       |

---

# 🧠 Mental Model

Array ko bookshelf ki tarah socho.

```text
Shelf 0 → Apple
Shelf 1 → Mango
Shelf 2 → Banana
Shelf 3 → Grapes
```

Har shelf ka apna index hota hai.

Array iteration ka matlab:

```text
Har shelf ko ek-ek karke visit karna.
```

---

# 🚨 Common Beginner Mistakes

### Wrong Last Index

```js
fruits[fruits.length]
```

❌ Wrong

---

Correct:

```js
fruits[fruits.length - 1]
```

✅

---

### Copying Arrays Incorrectly

```js
let arr2 = arr1;
```

Reference copy.

---

Correct:

```js
let arr2 = [...arr1];
```

---

### Using for...in Instead of for...of

Need values?

```js
for...of
```

Need indexes?

```js
for...in
```

---

# 🎯 What You Learned

After completing this module you should understand:

✅ What Arrays Are

✅ Array Indexing

✅ Array Modification

✅ Array Methods

✅ push()

✅ pop()

✅ shift()

✅ unshift()

✅ Primitive vs Reference Types

✅ Array Cloning

✅ Spread Operator

✅ for Loop

✅ while Loop

✅ for...of Loop

✅ for...in Loop

✅ const Arrays

✅ Array Destructuring

---

# 🚀 Next Module

➡️ [Objects](../05_objects)

In the next section you'll learn:

* Objects
* Key-Value Pairs
* Object Properties
* Object Destructuring
* Spread Operator with Objects

Arrays store data in order.

Objects store data with meaningful keys. 🔥
