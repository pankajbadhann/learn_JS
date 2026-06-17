// we can create a connection in b/w prototype  & __proto__

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); // {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
}
createUser.prototype.sing = function (){
    return "la la la la ";
}

const user1 = createUser('pankaj', 'badhan', 'pankaj4utanda@gmail.com', 16, "my address");
const user2 = createUser('loveleen', 'badhan', 'lp.badhan@gmail.com', 10, "my address");
const user3 = createUser('lp_badhan', 'coder.lp', 'kingbadan.lp@gmail.com', 17, "my address");
console.log(user3);
console.log(user1.is18());

// prototype ===> Object
// __proto__ ===> reference (which one chain you can create those reference)