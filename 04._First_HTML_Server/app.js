const express = require("express");

const app = express();

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

const knownNames = ["John", "Jim", "Bob"];
app.get("/knownpeople", (req, res) => {
    res.send({ "data": knownNames.length });
});

// ---------- bottom ------------
const PORT = 8080;
app.listen(PORT, () => console.log("Server is now running on port", PORT));