const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});

const startDateOfEM = new Date("2024-06-14T21:00:00");

app.get("/dateOfEM", (req, res) => {
    const formattedDate = startDateOfEM.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric'
    });
    const formattedTime = startDateOfEM.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: false // 24-hour format
    });
    res.send({ "data": `${formattedDate} - ${formattedTime}` });
});

app.get("/timeToEM", (req, res) => {
    const currentDate = new Date();
    const timeDifference = startDateOfEM - currentDate;
    const timeDifferenceInSeconds = timeDifference / 1000;
    const timeDifferenceInMinutes = timeDifferenceInSeconds / 60;
    const timeDifferenceInHours = timeDifferenceInMinutes / 60;
    const timeDifferenceInDays = timeDifferenceInHours / 24;

    const days = Math.floor(timeDifferenceInDays);
    const hours = Math.floor(timeDifferenceInHours % 24);
    const minutes = Math.floor(timeDifferenceInMinutes % 60);
    const seconds = Math.floor(timeDifferenceInSeconds % 60);


    res.send({ "data": `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds` });
});

// bottom
app.listen(8080, () => console.log("Server is now running on port 8080"));

// Export the Express API
module.exports = app;