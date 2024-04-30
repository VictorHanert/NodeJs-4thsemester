import { Router } from "express";
import jwt from "jsonwebtoken";
import dbConn from "../database/dbConn.js";
import { findUserById } from "../util/userUtil.js";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

router.get("/", async function (req, res, next) {
  const cookie = req.cookies["token"];

  try {
    const claims = jwt.verify(cookie, process.env.SECRET);

    if (!claims) {
      return res.status(401).json({
        success: false,
        error: true,
        message: "No Auth!",
        data: null,
      });
    }

    const user = await findUserById(dbConn.Coll, claims._id);
    const { password, ...userMinusPassword } = user;

    return res.json({
      success: true,
      error: false,
      message: "Authorized",
      data: userMinusPassword,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: "JWT Error",
      data: null,
    });
  }
});

export default router;
