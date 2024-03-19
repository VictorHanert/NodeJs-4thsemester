import express from 'express';
const app = express();
app.use(express.static('public'));

import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);

import { 
    homepagePage, 
    assignment_descriptionPage, 
    week1Page,
    week2Page,
    week3Page,
    week4Page,
    week5Page,
    week6Page
} from './util/readPages.js';

// =========== HTML ============
app.get("/", (req, res) => {
    res.send(homepagePage);
});

app.get("/assignment", (req, res) => {
    res.send(assignment_descriptionPage);
});

app.get("/week1", (req, res) => {
    res.send(week1Page);
});
app.get("/week2", (req, res) => {
    res.send(week2Page);
});
app.get("/week3", (req, res) => {
    res.send(week3Page);
});
app.get("/week4", (req, res) => {
    res.send(week4Page);
});
app.get("/week5", (req, res) => {
    res.send(week5Page);
});
app.get("/week6", (req, res) => {
    res.send(week6Page);
});

const PORT = 8080;
app.listen(PORT, ( )=> console.log('Server is running on port: ', PORT));