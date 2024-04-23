import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import cookieParser from "cookie-parser";
app.use(cookieParser());

import logger from "morgan";
app.use(logger("dev"));

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

import cors from "cors";
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

import loginRouter from "./routers/loginRouter.js";
import logoutRouter from "./routers/logoutRouter.js";
import userRouter from "./routers/userRouter.js";
import registerRouter from "./routers/registerRouter.js";

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/user", userRouter);
app.use("/api/logout", logoutRouter);

// Get port from environment and store in Express.
const PORT = process.env.PORT ?? 8080;
app.listen(PORT, console.log("Server is running on port", PORT));
