import express from 'express';
const app = express();
app.use(express.static('public'));

import path from 'path';

// =========== HTML ============
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/homepage.html"));
});

app.get("/assignment", (req, res) => {
    res.sendFile(path.resolve("public/pages/homepage/assignment_info.html"));
});

app.get("/week1", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/week1.html"));
});
app.get("/week2", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/week2.html"));
});
app.get("/week3", (req, res) => {
    res.sendFile(path.resolve("public/pages/documentation/week3.html"));
});

const PORT = 8080;
app.listen(PORT, ( )=> console.log('Server is running on port: ', PORT));