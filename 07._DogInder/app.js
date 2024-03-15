import express from 'express';
const app = express();
app.use(express.static('public'));

import pagesRouter from './routers/matchesRouter.js';
app.use(pagesRouter);

import matchesRouter from './routers/matchesRouter.js';
app.use(matchesRouter);

// BOTTOM:
const PORT = 8080;
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);});