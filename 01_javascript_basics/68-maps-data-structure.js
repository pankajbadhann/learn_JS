// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects
// different between maps and objects
// objects can only have string or symbol
// as key 
// in maps you can use anything as key
// like array, number, string 


// object literal  ---  key -> string (99.9%)   key -> symbol (0.1)
const person = {
    firstName : "pankaj",
    age: 16,  1:"one"
}
console.log(person.firstName);
console.log(person["firstName"]);
console.log(person[1]);
for(let key in person)  console.log(typeof key);

// key value pair 
const person2 = new Map();
person2.set('firstName', 'Pankaj');
person2.set('age', 16);
person2.set(1,'one');
person2.set([1,2,3],'oneTwoThree');
person2.set({1: 'one'},'fourFiveSix');

console.log(person2);
console.log(person2.get(1));

for(let key of person2.keys())
console.log(key, typeof key);

for(let [key] of person2)
console.log(Array.isArray(key));

for(let [key, value] of person2)
console.log(key, value);

const person1 = {
    id: 1,  firstName: "pankaj"
}
const person22 = {
    id: 2,  firstName: "ankaj"
}
const extraInfo = new Map();
extraInfo.set(person1, {age: 8, gender: "male"});
extraInfo.set(person22, {age: 9, gender: "female"});
// console.log(userInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person22).gender);