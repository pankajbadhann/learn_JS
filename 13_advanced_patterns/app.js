const myInput = document.getElementById("input-event");

// keyup: console me baad me print hota hai
// input: on the spot console me print ho jata hai
// change: when press enter or move on other side
// keypress: this is a buggy output different in different browsers this is not used by developers
// keydown:
// I recomended you & personally use: input

myInput.addEventListener("input", (e) => {
    // console.log(myInput.value);
    // console.log(this);
    console.log(e.target.value);
})
// if i typed: pankaj : then function is call 6 time
// par hum nahi chahte ki hamara function itne baar call na ho