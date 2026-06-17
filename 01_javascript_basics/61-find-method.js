// find method 

const myArray = ["Hello", "cat", "dog", "lion"];
 
const ans = myArray.find(string=>string.length===3);
console.log(ans);

const users = [
    {userId : 1, userName: "pankaj"},
    {userId : 2, userName: "loveleen"},
    {userId : 3, userName: "lp_badhan"},
    {userId : 4, userName: "coder.lp"},
    {userId : 5, userName: "king_badhan"},
];
const myUser = users.find(user=>user.userId===3);
console.log(myUser);