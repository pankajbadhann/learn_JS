// some method 

// when one or more number is even => true
const numbers = [3,5,12,9];
const ansz = numbers.some((number)=>number%2===0);
console.log(ansz);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 4, productName: "macbook", price: 82000},
]

const ans = userCart.some((cartItem)=>cartItem.price > 80000);
console.log(ans);