// firstly check file no. 80

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods);// {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser('pankaj', 'badhan', 'pankaj4utanda@gmail.com', 16, "my address");
const user2 = createUser('loveleen', 'badhan', 'lp.badhan@gmail.com', 10, "my address");
const user3 = createUser('lp_badhan', 'coder.lp',  'kingbadhan.lp@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.about());
console.log(user3.sing());