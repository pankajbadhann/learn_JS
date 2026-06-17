// get and set attrubutes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));

// Task: "href=#home" -> print in console only "home"
console.log(link.getAttribute("href").slice(1));

link.setAttribute("href", "https://codprog.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));