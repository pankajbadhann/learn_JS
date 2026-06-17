// hoisting 

// if check the result of p1 & any another then uncomment it!

// // p1
// hello();
// function hello(){
//   console.log("hello world");
// }
// // In this code, we are calling a function before declaration & its worked. this code is strange for those coders which have come from some other language.
// // But this is only work in function declaration its not work in function expression or arrow function.


// // p2
// hello();
// let hello = function(){
//     console.log("hello world");
// }

// // p3
// hello();
// const hello = function(){
//     console.log("hello world");
// }

// // p4
// hello();
// var hello = function(){
//     console.log("hello world");
// }

// // p5
// console.log(hello);
// let hello = "hello world";

// // p6
// console.log(hello);
// const hello = "hello world";

// // p7
// console.log(hello);
// var hello = "hello world";

// This Behaviour is called Hoisting.