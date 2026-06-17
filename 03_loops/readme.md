# 🔄 JavaScript Loops

Welcome to the third module of JavaScript.

Ab tak hum conditions (if-else) ke through decisions lena seekh chuke hain.

Lekin ek problem abhi bhi hai...

Suppose aapko 1 se 100 tak numbers print karne hain.

Without loops:

```js
console.log(1);
console.log(2);
console.log(3);
...
console.log(100);
```

😵 Ye bahut repetitive aur boring ho jayega.

Isi problem ko solve karne ke liye JavaScript mein **Loops** hote hain.

---

# 🤔 What is a Loop?

Loop ek programming structure hai jo ek hi block of code ko multiple times execute karta hai.

Simple words mein:

> "Jab tak condition true hai, code repeat karte raho."

Example:

```js
let i = 1;

while(i <= 5){
   console.log(i);
   i++;
}
```

Output:

```text
1
2
3
4
5
```

---

# 🎯 Why Do We Need Loops?

Real-world examples:

* 100 students ke marks calculate karna
* Shopping cart items process karna
* Array ke elements print karna
* Game updates run karna
* API data process karna

Without loops:

```text
Lots of repeated code ❌
```

With loops:

```text
Less code ✅
More readable ✅
Easy maintenance ✅
```

---

# 📂 Files Overview

| File                       | Topic              |
| -------------------------- | ------------------ |
| 20-while-loop.js           | while Loop         |
| 21-sum-of-n-numbers.js     | Sum of N Numbers   |
| 22-for-loop.js             | for Loop           |
| 23-for-loop-sum-example.js | Sum Using for Loop |
| 24-break-and-continue.js   | break & continue   |
| 25-do-while-loop.js        | do...while Loop    |

---

# 🔁 Loop Anatomy

Almost every loop has three parts:

```js
initialization
condition
updation
```

Example:

```js
let i = 0; // initialization

while(i <= 5){ // condition
   console.log(i);

   i++; // updation
}
```

---

# 1️⃣ while Loop

📄 File: `20-while-loop.js`

The while loop executes a block of code as long as a condition remains true.

---

## Syntax

```js
while(condition){
   // code
}
```

---

## Example

```js
let i = 0;

while(i <= 9){
   console.log(i);
   i++;
}
```

Output:

```text
0
1
2
3
4
5
6
7
8
9
```

---

## Step-by-Step Execution

### Iteration 1

```js
i = 0
```

Condition:

```js
0 <= 9
```

True → Print 0

Increment:

```js
i++
```

Now:

```js
i = 1
```

Same process repeat hota rahega.

---

## Infinite Loop

Danger ⚠️

```js
let i = 0;

while(i <= 5){
   console.log(i);
}
```

Output:

```text
Never Stops
```

Reason:

```js
i++;
```

Missing hai.

Condition kabhi false nahi hogi.

---

# 🧮 2️⃣ Sum of N Numbers

📄 File: `21-sum-of-n-numbers.js`

Question:

Find sum of numbers from 1 to 100.

---

## Using Loop

```js
let total = 0;
let i = 1;

while(i <= 100){
   total = total + i;
   i++;
}
```

Output:

```text
5050
```

---

## Visual Understanding

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
...
```

---

## Mathematical Formula

Instead of loop:

```js
n * (n + 1) / 2
```

Example:

```js
100 * 101 / 2
```

Output:

```text
5050
```

---

## Which is Better?

Formula:

```text
Fastest ✅
```

Loop:

```text
Learning Purpose ✅
Practical Understanding ✅
```

---

# 3️⃣ for Loop

📄 File: `22-for-loop.js`

for loop JavaScript ka sabse commonly used loop hai.

---

## Syntax

```js
for(initialization; condition; updation){
   // code
}
```

---

## Example

```js
for(let i = 0; i <= 9; i++){
   console.log(i);
}
```

Output:

```text
0
1
2
3
4
5
6
7
8
9
```

---

## How It Works?

### Initialization

```js
let i = 0;
```

Runs only once.

---

### Condition

```js
i <= 9
```

Checked before every iteration.

---

### Updation

```js
i++
```

Runs after every iteration.

---

## Why for Loop Is Popular?

Everything is written in one place:

```js
for(let i = 0; i < 10; i++)
```

Cleaner and easier to read.

---

# while vs for

### while

```js
let i = 0;

while(i < 10){
   i++;
}
```

Best when iterations unknown.

---

### for

```js
for(let i = 0; i < 10; i++)
```

Best when iterations known.

---

# 🧮 4️⃣ Sum Using for Loop

📄 File: `23-for-loop-sum-example.js`

Example:

```js
let total = 0;

for(let i = 1; i <= 100; i++){
   total += i;
}
```

Output:

```text
5050
```

---

## Why Use This Example?

Ye loop ke teen important concepts sikhata hai:

* Initialization
* Condition
* Accumulation

---

# 🛑 5️⃣ break Keyword

📄 File: `24-break-and-continue.js`

break loop ko immediately stop kar deta hai.

---

## Example

```js
for(let i = 1; i <= 10; i++){

   if(i === 4){
      break;
   }

   console.log(i);
}
```

Output:

```text
1
2
3
```

Loop 4 par terminate ho gaya.

---

## Real World Use Cases

* Search operation
* Finding first match
* Stopping unnecessary iterations

---

# ⏭️ continue Keyword

continue current iteration skip karta hai.

Loop stop nahi hota.

---

## Example

```js
for(let i = 1; i <= 10; i++){

   if(i === 4){
      continue;
   }

   console.log(i);
}
```

Output:

```text
1
2
3
5
6
7
8
9
10
```

Notice:

```text
4 skip hua
Loop continue raha
```

---

## break vs continue

| break          | continue               |
| -------------- | ---------------------- |
| Loop stop      | Current iteration skip |
| Execution ends | Execution continues    |
| Exit loop      | Next iteration         |

---

# 6️⃣ do...while Loop

📄 File: `25-do-while-loop.js`

do while while loop jaisa hi hai.

Difference:

```text
Condition baad mein check hoti hai.
```

---

## Syntax

```js
do{
   // code
}
while(condition);
```

---

## Example

```js
let i = 10;

do{
   console.log(i);
   i++;
}
while(i <= 9);
```

Output:

```text
10
```

---

## Why Did It Run?

Condition:

```js
i <= 9
```

False hai.

Phir bhi execute hua.

Reason:

```text
do block pehle run hota hai
condition baad mein check hoti hai
```

---

# while vs do while

### while

```js
while(condition){
}
```

Condition pehle check.

---

### do while

```js
do{

}
while(condition);
```

Condition baad mein check.

---

## Important Rule

### while

May execute:

```text
0 times
1 time
many times
```

---

### do while

Will execute:

```text
At least 1 time
```

Always.

---

# 🧠 Mental Model

Loop ko aise imagine karo:

```text
Start
  ↓
Check Condition
  ↓
True ?
  ↓
Run Code
  ↓
Update Variable
  ↓
Repeat
```

---

# 🔥 Common Beginner Mistakes

### Forgetting Increment

```js
while(i <= 10){
   console.log(i);
}
```

Infinite loop ❌

---

### Wrong Condition

```js
i >= 10
```

Instead of:

```js
i <= 10
```

---

### Using break Instead of continue

```js
break;
```

Loop stop.

```js
continue;
```

Iteration skip.

---

# 🎯 What You Learned

After completing this module, you should understand:

✅ What Loops Are

✅ Why Loops Exist

✅ while Loop

✅ for Loop

✅ do...while Loop

✅ Loop Execution Flow

✅ Sum of N Numbers

✅ break Keyword

✅ continue Keyword

✅ Infinite Loops

✅ Loop Best Practices

---

# 🚀 Next Module

➡️ [Arrays](../04_arrays)

In the next section you'll learn:

* What Arrays Are
* Storing Multiple Values
* Array Methods
* Array Iteration
* Destructuring

Loops + Arrays together are one of the most powerful combinations in JavaScript. 🔥