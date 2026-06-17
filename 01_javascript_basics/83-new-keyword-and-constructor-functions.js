// in Interview always ask, what is new keyword & how its work!

// new keyword do 3 work
// 1 (create empty object) this = {}
// 2 return this
// 3 create relation or link in b/w __proto__ & prototype

// __proto__  is written in official ecmascript documentation = [[prototype]]

// constructor function (create object)
// if we can create this type of function that in future call with new keyword only then its work then we can write first letter with capital
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
}
CreateUser.prototype.sing = function (){
    return "la la la la ";
}


const user1 = new CreateUser('pankaj', 'badhan', 'pankaj4utanda@gmail.com', 16, "my address");
const user2 = new CreateUser('loveeleen', 'badhan', 'lp.badhan@gmail.com', 10, "my address");
const user3 = new CreateUser('lp_badhan', 'coder.lp', 'kingbadhan.lp@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());