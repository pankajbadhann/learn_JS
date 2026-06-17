// default parameters 

function addTwo(a,b){
    if(typeof b ==="undefined"){
        b = 0;
    }
    return a+b;
}
const ans = addTwo(4);
console.log(ans);


function addTwo2(a,b=0){
    return a+b;
}
const ansr = addTwo2(4);
console.log(ansr);