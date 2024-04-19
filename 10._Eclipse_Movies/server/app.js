import express from 'express';
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

import moviesRouter from "./routers/movieRouters.js";
app.use(moviesRouter);

const PORT = 8080;
app.listen(PORT);