import express from 'express';
const app = express();

import moviesRouter from "./routers/movieRouters.js";
app.use(moviesRouter);

const PORT = 8080;
app.listen(PORT);