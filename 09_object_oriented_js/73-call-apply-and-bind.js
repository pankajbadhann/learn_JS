// call, apply, bind methods

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}
const user1 = {  firstName : "pankaj",  age: 16 }
const user2 = {  firstName : "loveleen",  age: 10 }

// call
about.call(user2, "coding", "call");
// apply
about.apply(user1, ["playing basketball", "apply"]);
// bind
const user2extra = about.bind(user1, "book reader", "blind");
user2extra();