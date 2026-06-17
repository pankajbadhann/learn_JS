// Analyse
let array = [1,2,3];
// array.
console.log(array);
// but when we can check in console not available any method here 
// from where these methods are coming : these methods are coming from prototype
// I told you some time ago that's prototype only in functions means constructor function or any function
// internally js create Array function in this way
let numbers = new Array(1, 2, 3);
console.log(Array.prototype)
console.log(Object.getPrototypeOf(array));
console.log(array);
// now we can thinking, its result is seeing like array but I ask you prototype is an object so in javascript array is an object
// if you are confused then check this

function hello(){
  console.log("hello");
} hello();
// I tell you, by default with every function gain free space which is prototype we can create methods here
console.log(Array.prototype); // here's given array
console.log(Array.isArray(Array.prototype)); // when we can check its really Array
console.log(hello.prototype); // here's given object

// in the line no. 20 given array & in line no. 22 given object : what's reason
// by default its given object but who are invented js usko lagga ki prototype set karna array is more better
console.log(hello.prototype); // here's given object
// but, we can change it with empty array : how its possible
hello.prototype = [];
console.log(hello.prototype); // here's given array & we can add here
hello.prototype.push('1');
console.log(hello.prototype); // but its no use in our work
// we can mainly use in prototype for methods in covered lectures