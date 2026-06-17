// get multiple elements using getElements by class name 
// get multiple elements items using querySelectorAll
const navItemsG = document.getElementsByClassName("nav-item"); // HTMLCollection
console.log(navItemsG);
console.log(navItemsG[1]);
console.log(typeof navItemsG)
console.log(Array.isArray(navItemsG));


const navItemsQ = document.querySelectorAll(".nav-item"); // NodeList
console.log(navItemsQ);
console.log(navItemsQ[1]);
console.log(typeof navItemsQ);
console.log(Array.isArray(navItemsQ));