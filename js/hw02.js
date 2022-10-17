let userName = prompt("Please enter your name", "John Watson");
let userAge = prompt("Please enter your age", "33");
let userNationality = prompt("Please enter your nationality", "English");

console.log("Hello! My name's " + userName + ". I'm " + userAge + " years old and I'm " + userNationality + ".");

let randomNumber = 97457;
let newNumber = randomNumber.toString();


for (let i = 0; i < newNumber.length; i += 1) {
    console.log(newNumber[i]);
}