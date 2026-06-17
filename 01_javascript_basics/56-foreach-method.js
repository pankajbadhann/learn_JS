// important array methods 
// for each


const numbers = [4,2,5,8];

function myFunc(number, index){
    console.log(`index is ${index} number is ${number}`);
}
myFunc(numbers);

numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number, index){
    console.log(number*3, index);
})

const users = [
    {firstName: "pankaj", age: 23},
    {firstName: "loveleen", age: 21},
    {firstName: "lp_badhan", age: 22},
    {firstName: "coder.lp", age: 20},
]

users.forEach(function(user){
    console.log(user.firstName);
});

users.forEach((user, index)=>{
    console.log(user.firstName, index);
})

for(let user of users){
    console.log(user.firstName);
}