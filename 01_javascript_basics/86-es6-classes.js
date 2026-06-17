// 2015 / es6 
// class keyword 
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return "la la la la ";
    }
}
const user1 = new CreateUser('pankaj', 'badhan', 'pankaj4utanda@gmail.com', 16, "my address");
const user2 = new CreateUser('loveleen', 'badhan', 'lp.badhan@gmail.com', 10, "my address");
console.log(user1.firstName);
console.log(user2.is18());
console.log(Object.getPrototypeOf(user1));
const user3 = CreateUser('lp_badhan', 'coder.lp', 'kingbadhan.lp@gmail.com', 17, "my address");