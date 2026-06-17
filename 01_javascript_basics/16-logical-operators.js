// and operator  -->  used it when both operator values are true then print the output
// or  operator  -->  used it when any one operator values are true then print the output

let firstName = "Pankaj";
let age = 16;

if(firstName[0] === "P" && age>=18)
  console.log("inside if");
else
  console.log("inside else");

if(firstName[0] === "P" || age>=18)
  console.log("inside if");
else
  console.log("inside else");