// param destructuring 

// object 
// react 

const person = {
    firstName: "Pankaj",
    gender: "male",
    // age: 16
}

function printDetail(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}


function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);