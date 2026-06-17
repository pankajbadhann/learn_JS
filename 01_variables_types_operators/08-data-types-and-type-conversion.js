// typeof operator 

// data types (primitive data types)
// string    : "pankaj"
// number    : 2, 4, 5.6 
// booleans  : result : true/false
// undefined : covered later
// null      :       ,,
// BigInt    :       ,,
// Symbol    :       ,,

let age = 16;
let firstName = "pankaj";

console.log(typeof age);

// // 16 -> "16"
// // convert number to string. 
age = age + "";
console.log(typeof(age));

// // convert string to number. 
let myStr = +"34";
console.log(typeof myStr);

// one more way - convert string to number
let ages = "17";
ages = Number(age);
console.log(typeof ages);