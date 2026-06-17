// we can improve this method
// now we are think what are the main expection of this upper code, above code is working good
// when create user1 is created also creates object & its have two mothods
// when create user2 is created also creates object & its have two mothods
// when create user3 is created also creates object & its have two mothods
// now whenever user create also create methods & and all methods add in our memory
// if own 1 million user then million time methods created in our memory
// means, how many copies want to these method I have only want 1 copy of method because these method are same in all user 
// method defination also same no change but when create user1 also create method, when create user2 also create method,
// when create user3 also create method

// so that these methods are create in another object & write all of these methods
// now we can thinking what's change, the biggest change is we can not select mehtod in primitive type its type is refrence data type 
// we can write its refrence(address) means when we can call this function, js reach its address then call

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}  
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
// 79. In upeer code also expection that if we can create thousand's of  method in our object
// all methods also write in our function with this format
// user.about = userMethods.about;
// but if we can forget for write this code then its create very big problem
// it wil discuss in file no. 80

const user1 = createUser('pankaj', 'badhan', 'pankaj4utanda@gmail.com', 16, "my address");
const user2 = createUser('loveleen', 'badhan', 'lp.badhan@gmail.com', 10, "my address");
const user3 = createUser('lp_badhan', 'coder.lp', 'kingbadhan.lp@gmail.com', 17, "my address");
console.log(user1.about());
console.log(user3.about());