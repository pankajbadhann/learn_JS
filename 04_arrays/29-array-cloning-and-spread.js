// how to clone array 
// how to concatenate two arrays

let array1 = ["item1", "item2"];
let array2 = ["item1", "item2"];
let array3 = array1.slice(0).concat(["item3", "item4"]);
let array4 = [].concat(array1,["item3", "item4"]);
// new way  -->  spread operator
let oneMoreArray = ["item3", "item4"]
let array5 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);

// slice method is much faster as compare to other ways But most use spread operator for its simple syntax