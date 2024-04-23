import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConn from '../dbConn.js';
import { findUser } from '../util/findUser.js';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ success: false, error: true, message: "Missing username or password" });
        }

        const foundUser = await findUser(dbConn.Coll, username);
        if (!foundUser) {
            return res.status(404).json({ success: false, error: true, message: "Authentication failed" });
        }

        const validPassword = await bcrypt.compare(password, foundUser.password);
        if (!validPassword) {
            return res.status(400).json({ success: false, error: true, message: "Authentication failed" });
        }

        const token = jwt.sign({ _id: foundUser._id }, process.env.SECRET, { expiresIn: '24h' });
        res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ success: true, message: "Login successful" });
    } catch (error) {
        next(error);
    }
});

export default router;