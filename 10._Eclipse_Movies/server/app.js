import "dotenv/config";

import express from 'express';
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

import session from 'express-session';

app.use(session({  
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // false fordi vi kører på HTTP
}));
// generate cryptokey command in "node": > require("crypto").randomBytes(36).toString("hex")
console.log(process.env.SESSION_SECRET);

import moviesRouter from "./routers/movieRouter.js";
app.use(moviesRouter);

import customersRouter from "./routers/customersRouter.js";
app.use(customersRouter);

const PORT = 8080;
app.listen(PORT);