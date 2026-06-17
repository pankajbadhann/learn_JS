// sort method 
// sort  
// 5,9,1200, 410, 3000
// 5, 9, 410, 1200, 3000 (expected)
// 1200, 3000, 410, 5, 9 (originally worked)

const userNames = ['pankaj', 'abcd', 'loveleen', 'lp_badhan', 'aabc', 'ABC', 'Pankaj'];
userNames.sort();
console.log(userNames);

const numbers = [5,9,1200, 410, 3000];
numbers.sort();
console.log(numbers);
numbers.sort((a,b)=>b-a);
console.log(numbers);
numbers.sort((a,b)=>a-b);
console.log(numbers);

// id: productId , product: productName , p: price
const products = [
    {id: 2, product: "p2", p: 3000 },
    {id: 3, product: "p3", p: 200 },
    {id: 5, product: "p5", p: 500 },
]
const lowToHigh = products.slice(0).sort((a,b)=>a.p-b.p);
console.log(lowToHigh);
const highToLow = products.slice(0).sort((a,b)=>b.p- a.p);
console.log(highToLow);

// nam: firstName
const users = [
    {nam: "pankaj", age: 23},
    {nam: "loveleen", age: 22},
    {nam: "lp_badhan", age: 21},
    {nam: "coder.lp", age: 20},
]
users.sort((a,b)=>{
    if(a.firstName > b.firstName)
        return 1;
    else
        return -1;
});
console.log(users);

