// short syntax

const user1 = {
  firstName : "pankaj",
  age: 16,
  // about: function(){
  //   console.log(this.firstName, this.age);  // pankaj 16
  // }
  about(){
    console.log(this.firstName, this.age);
  }
}
user1.about();