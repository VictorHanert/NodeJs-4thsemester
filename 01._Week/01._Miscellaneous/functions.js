// hoisting (betyder 'at løfte op')
getRandomInt();

function getRandomInt(min, max) {
    Math.floor(Math.random() * (max +1 - min) + min);
}

const getRandomIntAnonymousFunction = function(min, max) {
    return Math.floor(Math.random() * (max +1 - min) + min);
}

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max +1 - min) + min);
}

// One-liner arrow function:
const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max +1 - min) + min);

// Callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;
console.log(genericActionPerformer('Alex', running));

console.log(genericActionPerformer('Louis', (name) => `${name} is eating`));
