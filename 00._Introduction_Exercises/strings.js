// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2
addNumbers = parseFloat(numberOne) + Number(numberTwo);
console.log(addNumbers);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

addNumbers = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
addNumbers = addNumbers.toFixed(2);
console.log(addNumbers);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const avg = ((one + two + three) / 3).toFixed(5);

console.log(avg);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const c = letters[2];

console.log(c);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const capitalized = fact.replace("j", "J");

console.log(capitalized);
// --------------------------------------


