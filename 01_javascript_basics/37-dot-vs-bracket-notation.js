// difference between dot and bracket notaion
const key = "email";
const person = {
  name: "Pankaj",
  age: 16,
  "person hobbies": ["book reading", "playing basketball", "listening music"]
}


console.log(person.person hobbies);
console.log(person["person hobbies"]);
person[key] = "kingbadhan.lp@gmail.com";
console.log(person);