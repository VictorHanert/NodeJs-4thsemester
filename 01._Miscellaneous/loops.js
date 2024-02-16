// loop methods:
// forEach, map, filter, sort, find, reduce

//famous dogs
const dogs = [
    { name: "Lassie", fameLevel: 13 },
    { name: "Beethoven", fameLevel: 8 },
    { name: "Haciko", fameLevel: 18 },
    { name: "Balto", fameLevel: 5 }
];

// add +3 famelevel for all dogs
const increasedFamous = dogs.map((dog) => {
    dog.fameLevel += 3;
    return dog;
});

// add male gender = true for all dogs except Lassie
const addGender = increasedFamous.map((dog) => ({
    name: dog.name,
    fameLevel: dog.fameLevel,
    isMale: dog.name === 'Lassie' ? false : true
}));

console.log(dogs);
console.log(increasedFamous);
console.log(addGender);

// double the number in oneliner
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);

// number objects
const numberObjects = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
    { number: 5 }
];

// double the number in oneliner
const doubledNumberObjects = numberObjects.map((numberObject) => ({
    number: numberObject.number * 2
}));

console.log(doubledNumbers);
console.log(doubledNumberObjects);