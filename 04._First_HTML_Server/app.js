const express = require("express");

const app = express();

app.use(express.static("public"));

// const helicopterFactoryFile = require("./util/helicopterFactory.js");
// helicopterFactoryFile.helicopterFactory();

const { helicopterFactory } = require("./util/helicopterFactory.js");
console.log(helicopterFactory());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

app.get("/greeting", (req, res) => {
    if (req.query.name) {
        res.send({ "data": `Hello, ${req.query.name}! Welcome to the homepage` });
    }
    else {
        res.send({ "data": "Hello Stranger, who are you?" });
    }
});

app.get("/loggedIn", (req, res) => {
    console.log("Welcome!");
    res.send({ data: "You are now logged in!"});
});

app.get("/logIn", (req, res) => {
    if (req.query.password !== "SesameOpenUp") {
        res.status(400).send({ data: "Wrong password..." });
    }
    else {
        res.redirect('/loggedIn');
    }
});

const knownNames = ["John", "Jim", "Bob"];
app.get("/knownpeople", (req, res) => {
    res.send({ "data": knownNames.length });
});

app.get("/proxy", (req, res) => {
    fetch("https://www.google.dk")
        .then(response => response.text())
        .then(data => res.send(data));
});

// ---------- bottom ------------
const PORT = 8080;
app.listen(PORT, () => console.log("Server is now running on port", PORT));