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
    const secondValue = req.params.someOtherValue
    console.log(firstValue, secondValue);
    console.log(req.params);
    res.send({ data: "this is the thirdroute"});
});



// opretter en port (altid i bunden)
// well-known ports: 
// http: 80 og dev: 8080
// https: 443 og dev: 9090
app.listen(8080);