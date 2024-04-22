import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.options('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", ['X-Requested-With','content-type','credentials']);
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.status(200);
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

import loginRouter from "./routers/loginRouter.js";
import logoutRouter from "./routers/logoutRouter.js";
import userRouter from "./routers/userRouter.js";
import registerRouter from "./routers/registerRouter.js";

app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/logout', logoutRouter);

// Get port from environment and store in Express.
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, console.log("Server is running on port", PORT));