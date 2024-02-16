//Always use "const" as default
const myName = "Victor";

const me = {};

me.name = myName;

console.log(me);

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned

const hobbies = ["programming", "gaming", "reading"];

hobbies.push("cooking");
// hobbies = ["cooking"]; // This will not work
// hobbies = "cooking"; // This will not work

me.hobbies = hobbies;
console.log(me);

// Types in JS: number, string, boolean, object, function, undefined, null, symbol

// Type coercion: Always use === and !== for strict equality and inequality checks
2 == "2"; // true
2 === "2"; // false