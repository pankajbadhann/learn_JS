const user1 = {
    firstName : "pankaj",
    age: 16,
    about: function(){
        console.log(this.firstName, this.age);
    }   
 }

user1.about();

// don't do this mistake 
const myFuncMis = user1.about;
// because user1.about select only function not select an object & function in which data present that's select only particular function
// only select this function : about: function(){ console.log(this.firstName, this.age); }
myFuncMis();

// do this
const myFunc = user1.about.bind(user1);
myFunc();