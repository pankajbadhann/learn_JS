// JavaScript Program Add 2 Numbers

const addNum = (a, b) => a+b;

// Static
console.log(`Sum of a & b is : ${addNum(5,3)}`);

// Dynamic
const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));

console.log(`Sum of ${num1} & ${num2} is : ${addNum(num1, num2)}`);