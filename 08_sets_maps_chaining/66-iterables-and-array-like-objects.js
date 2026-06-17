// iterables 
// jispe hum for of loop laga sakein
// string , array are iterable 

const firstNam = "Pankaj";
for(let char of firstNam){
  console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for(let item of items){
  console.log(item);
}


// array like object 
// jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
// example :- string 

const firstName = "pankaj";
console.log(firstName.length);
console.log(firstName[3]);


const users = {'key1': 'value1', 'key2': 'value2'};
for(let item of users) console.log(item);