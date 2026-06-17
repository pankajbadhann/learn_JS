// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'pankaj', gender: 'male'},
    {userId: 2,firstName: 'loveleen', gender: 'male'},
    {userId: 3,firstName: 'lp_badhan', gender: 'male'},
];
for(let user of users){
    console.log(user.firstName);
}