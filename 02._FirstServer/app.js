// importere express biblioteket
const express = require("express");

// instansieret et express objekt
const app = express();

// route  -  endpoint, callback-function med (request, response)
app.get("/", (req, res) => {
    res.send({data: "Welcome to the server"});
});

app.get("/secondRoute", (req, res) => {
    res.send({ data: [1, 2, 3 ,4] });
});

app.get("/thirdRoute/:someValue/:someOtherValue", (req, res) => {
    const firstValue = req.params.someValue;
    const secondValue = req.params.someOtherValue;
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({ data: "this is the thirdroute"});
});

let balance = 100;
app.get("/wallet/:withdrawalAmount", (req, res) => {
    /* start with the balance of 100 in the wallet
        every time a client calls this route the value of paymentOut should be subtracted from the balance
        if the paymentOut creates a balance below 0 then tell the client "Sorry, not enough funds" */
        const withdrawalAmount = Number(req.params.withdrawalAmount);
        
    if (!withdrawalAmount) res.send({ data: "You have submitted an incorrect amount, (not a number)." });

    if (balance - withdrawalAmount < 0) {
        res.send({ data: "Sorry, not enough funds"});
    } else {
        balance -= withdrawalAmount;
        res.send({ data: balance });
    }
});



// opretter en port (altid i bunden)
// well-known ports: 
// http: 80 og dev: 8080
// https: 443 og dev: 9090
app.listen(8080);