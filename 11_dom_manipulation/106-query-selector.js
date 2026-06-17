// select element using query selector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");

// const navItem = document.getElementById("nav-item");      // only home select
// const navItem = document.querySelector(".nav-item");      // only home select
const navItem = document.querySelectorAll(".nav-item");   //  select all
console.log(navItem);