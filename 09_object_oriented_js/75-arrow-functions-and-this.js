// arrow functions 
// arrow function is only carry this from our surrounding
// when arrow function use then  one level is up
// I know this is confusing but not problem when we create a projects check real example where its need
const user1 = {
    firstName : "pankaj",
    age: 16,
    // about: function() {
    //     console.log(this.firstName, this.age)
    // }
    about: () => {
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);