// array methods :- push pop shift unshift 
// fast :- push & pop is faster as compare to shift & unshift

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push  -->  used to add element at the ending index
fruits.push("banana");
console.log(fruits);

// pop  -->  used to remove an element from ending index & added into a new variable
let poppedFruit = fruits.pop();
console.log(typeof poppedFruit)
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift  -->  used to add element at the starting index
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift  -->  used to remove an element from starting index & added into a new variable
let removedFruit = fruits.shift();
console.log(fruits);
console.log(typeof removedFruit)
console.log("removed fruits is ", removedFruit);