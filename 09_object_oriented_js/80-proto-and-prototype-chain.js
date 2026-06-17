// __proto__ === [[prototype]]
const obj1 = {  key1: "value1",  key2: "value2"  }
const obj2 = { key3: "value3"}
console.log(obj1.key1);  console.log(obj2.key3);
console.log(obj2.key2);
// its result is undefined & you are thinking its result is ok (undefined) we are already know, but I not want to this result (undefined),
// I want js check, if not present value of key2 in obj2 then js automatically reached in obj1 & check here key2 is present if present then print the value of key2.
// how can do this work but we can before it one more thing is learn that's
// we can make empty object & add elements in there
// const obj2 = { key3: "value3"}             // both result are same
// const obj2 = {};  obj2.key3 = "value";     // both result are same
// but there is one more way to create empty object
const obj3 = Object.create(obj1);
console.log(obj3);
// obj2 is empty object but in bracket we can write (obj1) it seems that connection was made we can't know how can make connection but connection was made
// this is empty object & we can add there value
obj2.key3 = "value3";  console.log(obj2.key2);
obj2.key2 = "unique";  console.log(obj2.key2);
// that's called chaining process detailed explanation later
// explain all above that's happening

// abhi humne baat ki __proto__ ki jisko documentation me [[prototype]] likha hua hai browser ke consol me __proto__ likha ho sakta hai
// aur [[prototype]] bhi likha ho sakta hai
// javascript mein ek prototype property alag se bhi hoti hai jiske bare mein hum detail mein baat karege

console.log(obj2);
console.log(obj2.__proto__);