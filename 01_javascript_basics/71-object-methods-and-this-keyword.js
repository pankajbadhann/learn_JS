// methods
// function inside object

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "pankaj",
    age: 16,
    about: personInfo
}
const person2 = {
    firstName : "lovely",
    age: 10,
    about: personInfo
}
const person3 = {
    firstName : "ankaj",
    age: 17,
    about: personInfo
}

person1.about();
person2.about();
person3.about();