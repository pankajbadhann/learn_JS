// block scope vs function scope 

// let and const are block scope
// var is function scope 

if(true){
    var firstName = "Pankaj";
    console.log(firstName);
}

console.log(firstName);

function myApp(){
    if(true){
        var lastName = "Badhan";
        console.log(lastName);
    }

    if(true){
        console.log(lastName);
    }
    console.log(lastName);
}

myApp();