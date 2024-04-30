import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConn from "../database/dbConn.js";
import { findUser } from "../util/userUtil.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.post("/", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Missing username or password",
    });
  }

  try {
    const foundUser = await findUser(dbConn.Coll, username);

    if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Authentication failed",
      });
    }

    const token = jwt.sign({ _id: foundUser._id }, process.env.SECRET, {
      expiresIn: "24h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    next(error);
  }
});

export default router;
