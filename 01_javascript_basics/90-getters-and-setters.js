// getter & setter
// when check any part first of all uncomment it!

// Part 1
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person("pankaj", "badhan", 16);

// console.log(person1.fullName());
// console.log(person1.fullName);

// Part 2
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person("pankaj", "badhan", 16);
// console.log(person1.fullName);
// person1.firstName = "king";
// person1.fullName = "LP Coder";
// console.log(person1.fullName);
// console.log(person1.fullName());

// Part 3
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("pankaj", "badhan", 16);
console.log(person1.fullName);
person1.firstName = "king";
console.log(person1.fullName);
person1.fullName = "LP Coder";
console.log(person1.fullName);
console.log(person1.firstName);