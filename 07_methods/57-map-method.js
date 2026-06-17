// map method : A new array is always created with map method

const numbers = [3,4,6,1,8];

const squareNumber = numbers.map((number, index)=>index);
console.log(squareNumber);

const users = [
    {firstName: "pankaj", age: 16},
    {firstName: "loveleen", age: 10},
    {firstName: "lp_badhan", age: 10},
    {firstName: "coder.lp", age: 16},
]

const userNames = users.map((user)=> user.firstName);
console.log(userNames);