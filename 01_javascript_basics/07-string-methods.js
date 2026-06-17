// trim()              used for remove spaces
// toUpperCase()       used for all leters convert into Upper Case
// toLowerCase()       used for all leters convert into Lower Case
// slice()             used to copy String from (_,_)index & Paste it in a new String

let firstName = "    pankaj    ";

console.log(firstName.length);

console.log(firstName)
firstName = firstName.trim(); // "pankaj"

console.log(firstName)
console.log(firstName.length);

firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// slice(startIndex,endIndex)

let newString = firstName.slice(0,4); // pank
console.log(newString);
let newString2 = firstName.slice(1); // p
console.log(newString2);
console.log(firstName);
console.log(firstName.length);