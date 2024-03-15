// Asynchronous code:

// Browser events handlers (mouseEvent, keyEvent, etc.)
// Network requests (HTTP requests, TCP, etc.)
// Working with files and folders (reading/writing files, etc.)
// Streams and buffers
// setTimeout, setInterval
// Database operations

//In JS there are one thread - "the main thread" which is important not to block it


// Solution 1. Callbacks:
// Problem: Callback hell, Pyramid of doom

// Solution 2. Promises:
// Can be in two different states: pending and fulfilled -> (resolved, rejected)

// Solution 3. Async/await:
// "Syntactic sugar"

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error('Some Error');
            resolve('Success');
        } catch (error) {
            reject('Error');
        }
    }, 1000);
})
.then((successMessage) => console.log(successMessage))
.catch((errorMessage) => console.log(errorMessage));

console.log('This will be logged first');

//promisified function that returns a promise
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
            resolve('Something Good');
            } catch (error) {
            reject('Something Bad');
            }
        }, 2000);
    })
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage));
}

myPromise();

function myFetch(URL, options) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve({
                    json: () => 
                    new Promise((resolve, reject) => 
                    resolve("Respone from server"))
                });
            } catch {
                reject();
            }
        }, 500);
    });
}

myFetch('https://www.example.com')
.then((response) => response.json())
.then((result) => console.log(result));


//Async await:
// IIFE ("iffy"): (Immediately invoked function expression)
(async () => {
    try {
        const myPromiseResult = await myPromise();
        console.log(myPromiseResult);
    } catch {
        console.log(error)
    }
})();

// main();
