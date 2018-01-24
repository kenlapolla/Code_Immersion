function greeting() {
    console.log("Hello Class!");
}

greeting();

//Using a global variable
var myClass = "Class";
function greeting2() {
 console.log("Hello " + myClass);
}
greeting2();

//Pass a variable 
function greeting3(name) {
    console.log("Hello " + name);
}

greeting3(myClass); //Notice how we re-use the variable

//Pass multiple arguments
// var myName = prompt("What is your name?");
// var languages = prompt("Do you know a language besides English?");
// var welcomeSaying = prompt("Do you greet others in that language?");

// function greeting4(name, language, saying) {

//         console.log(saying + " " + name + ", nice to speak with someone who knows " + language);
    
// }
// greeting4(myName, languages, welcomeSaying);

//Returning a variable

function addItUp(x, y) {
    var z = x + y;
    return z;
}
var num = addItUp(7,5); //12
console.log(num);