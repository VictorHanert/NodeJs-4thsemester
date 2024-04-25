import { Router } from "express";
import bcrypt from "bcrypt";
import dbConn from "../dbConn.js";
import fs from "fs";
import path from "path";
import { registerUser } from "../util/userUtil.js";
import { welcomeEmail } from "../util/email.js";

const router = Router();

router.post("/", async function (req, res, next) {
  try {
    const { username, password, firstname, lastname, email } = req.body;

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
      email,
      password: hashedPassword,
    };
    const newRegister = await registerUser(dbConn.Coll, newUser);

    res.json({
      success: true,
      error: false,
      message: "Successful Registration!",
      data: newRegister,
    });
    // Send welcome email
    const to = email;
    const html = `
    <div style="color: white; background-color: #BE90D4; padding: 20px; border-radius: 20px; text-align: center;">
    <h1>Hello ${firstname} ${lastname},</h1>
    <hr style="width: 100%;border: none;border-top: 1px solid #eaeaea;border-color: #cccccc;margin: 20px 0;"/>
    <p>Welcome to MySpace, the platform where you can write your name on a virtual whiteboard.</p>
    <p>We are excited to have you on board and can't wait to see what you will create.</p>
    <p>Your username is: <strong>${username}</strong>, and you password is: <strong>${password}</strong>,</p>
    <p>🪐 Best regards,</p>
    <p>The MySpace team 🚀</p>
    <hr style="width: 100%;border: none;border-top: 1px solid #eaeaea;border-color: #cccccc;margin: 20px 0;"/>
    <p style="font-size: 12px;line-height: 24px;margin: 16px 0;color: #010101;">
    Gl Kongevej 7, Copenhagen, 2200, Denmark
    </p>
    </div>
    `;
    await welcomeEmail(to, html);

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
