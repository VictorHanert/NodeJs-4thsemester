import "dotenv/config";

import express from 'express';
const app = express();

app.use(express.json());

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from 'express-session';

app.use(session({  
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // false fordi vi kører på HTTP
}));
// generate cryptokey command in "node": > require("crypto").randomBytes(36).toString("hex")
console.log(process.env.SESSION_SECRET);

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});