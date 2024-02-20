const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/homepage.html");
});

app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/publicSquare.html");
});



// ---------- bottom ------------
const PORT = 8080;
app.listen(PORT, () => console.log("Server is now running on port", PORT));