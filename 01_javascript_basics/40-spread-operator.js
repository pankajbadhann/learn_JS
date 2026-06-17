// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 89, 69];
const newArray2 = [..."123456789"];
console.log(newArray);
console.log(newArray2);

// spread operator in objects
const obj1 = {  key1: "value1" };
const obj2 = {  key1: "valueUnique"};

const newObject = { ...obj2, ...obj1, key69: "value69" };
const newObject2 = { ...obj1, ...obj2, key69: "value69" };
const newObject3 = { ...["item1", "item2"] };
const newObject4 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject);
console.log(newObject2);
console.log(newObject3);
console.log(newObject4);