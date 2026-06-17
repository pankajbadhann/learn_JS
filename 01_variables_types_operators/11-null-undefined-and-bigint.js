// undefined  ,  null

let firstName;
console.log(typeof firstName);
firstName = "Pankaj";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "Pankaj";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error 
// million of people write our code,framework according to this bug they deal it
// if this bug is fixed then chane the code of million framework so js not change it.

// BigInt
let myNumber = BigInt(12);
let sameMyNumber = 123n;
console.log(myNumber);
console.log(sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);