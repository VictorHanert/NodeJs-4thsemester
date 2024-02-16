// importere express biblioteket
const express = require("express");

// instansieret et express objekt
const app = express();

// tillader os at parse body's
app.use(express.json());

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

// qeury parameters:
// http://localhost:8080/saySomethingNiceAboutMe/hello?handsome=very&tall=indeed&cool=always
app.get("/saySomethingNiceAboutMe/:greeting", (req, res) => {
    console.log(req.params.greeting);
    console.log(req.query);
    if (req.query.handsome === 'very') {
        return res.send( '<h1>thanks cool cat</h1>' );
    }
    return res.send( '<h1>aint no thang</h1>');
});

app.post("/postman", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});



// ------------ opretter en port (altid i bunden) -----------------
// well-known ports: 
// http: 80 og dev: 8080
// https: 443 og dev: 9090
app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
        return;
    }
    console.log("Server is now running on port", 8080)
})