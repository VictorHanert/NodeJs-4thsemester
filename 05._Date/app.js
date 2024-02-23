const express = require("express");
const app = express();


// UTC:
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Local time (on my computer)
console.log(Date());


app.get("/date", (req, res) => {
    res.send({ date: Date() });
});

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

app.get("/month/version1", (req, res) => {
    const monthIndex = new Date().getMonth();
    res.send({ data: { months: months[monthIndex] } });
});

app.get("/month/version2", (req, res) => {
    const month = new Date().toLocaleDateString("en-US", { month: "long" }); // short, long, numeric, 2-digit, narrow
    res.send({ data: {month} });
});

app.get("/month/version3", (req, res) => {
    const monthName = Date().split(" ")[1];
    res.send({ data: { monthName } });
});

//I JS starter ugen på søndag:
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
app.get("/day", (req, res) => {
    const dayName = days[new Date().getDay()];
    res.send({ data: { dayName } });
});

// BOTTOM
const PORT = 8080;
app.listen(PORT, () => console.log("Server running on port", PORT));