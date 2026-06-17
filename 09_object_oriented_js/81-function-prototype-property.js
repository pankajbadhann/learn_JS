// what is prototype & how its work!

function hello(){
    console.log("hello world");
} hello();

// javascript function ===> function  + object
console.log(hello.name);
// now we can thinking name is already know why check name
// this topic is covered later for now this is out of scope
// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// you can add your own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// name property ---> tells function name;
// function provides more usefull properties.
// function provide us empty object & that object called prototype

console.log(hello.prototype);

// prove
// only functions provide prototype property
const hellow = {key1: "value1"}

if(hello.prototype)  console.log("prototype is present");
else  console.log("prototype is not absent");

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype);
console.log(hello.prototype.sing());