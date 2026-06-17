// HTMLCollection & NodeList are array like object
// array like object ---> indexing, length property 
// we can't use forEach method to iterate through HTMLCollection
// we can use forEach method to iterate through NodeList

// Part1: HTMLCollection
let navItemsG = document.getElementsByTagName("a"); // HTMLCollection
console.log(navItemsG);
console.log(Array.isArray(navItemsG));

// simple for loop
for(let i=0; i< navItemsG.length; i++){
    // console.log(navItemsG[i]);
    const navItem = navItemsG[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// for of loop 
for(let navItem of navItemsG){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

navItemsG = Array.from(navItemsG);
console.log(Array.isArray(navItemsG));
// // forEach
navItemsG.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

// Part2: NodeList
let navItemsQ = document.querySelectorAll("a");
console.log(navItemsQ);
console.log(Array.isArray(navItemsQ));

// simple for loop 
for(let i=0; i< navItemsQ.length; i++){
    // console.log(navItemsQ[i]);
    const navItem = navItemsQ[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// for of loop 
for(let navItem of navItemsQ){
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
}

// forEach 
navItemsQ.forEach((navItem)=>{
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";
})

navItemsQ = Array.from(navItemsQ);
console.log(Array.isArray(navItemsQ));