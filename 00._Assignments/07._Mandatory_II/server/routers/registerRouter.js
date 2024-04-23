import { Router } from "express";
import bcrypt from "bcrypt";
import dbConn from "../dbConn.js";
import { registerUser } from "../util/findUser.js";

const router = Router();

router.post("/", async function (req, res, next) {
  try {
    const { username, password, firstname, lastname } = req.body;

    if (!username || !password) {
      return res.status(400).json({
          success: false,
          error: true,
          message: "Missing username or password",
        });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user object for registration
    const newUser = {
      firstname,
      lastname,
      username,
      password: hashedPassword,
    };
    const newRegister = await registerUser(dbConn.Coll, newUser);

    res.json({
      success: true,
      error: false,
      message: "Successful Registration!",
      data: newRegister,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        error: true,
        message: "Error with database registration",
        data: req.body,
      });
  }
});

export default router;
