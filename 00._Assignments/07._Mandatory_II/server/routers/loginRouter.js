import { Router } from "express";
const router = Router();

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dbConn from '../dbConn.js';
import dotenv from 'dotenv';
dotenv.config();

const findUser = async (collection,user)=>{
  const User = await collection.find({username:user}).toArray();
  return User[0]
}

/* POST users listing. */
router.post('/', async function(req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
  res.header("Access-Control-Allow-Credentials", 'true');
  if(!req.body.username){
    return res.status(500).json({success: false, error: true, message: "Missing Username", data: req.body});
  }
  if(!req.body.password){
    return res.status(500).json({success: false, error: true, message: "Missing Password", data: req.body});
  }

  const searchFor = req.body.username;
  const foundUser = await findUser(dbConn.Coll, searchFor);
  if(!foundUser){
    return res.status(404).json({success: false, error: true, message: "User Not Found!", data: req.body});
  }

  const validPassword = await bcrypt.compare(req.body.password, foundUser.password);
  if(!validPassword){
    return res.status(400).json({success: false, error: true, message: "Invalid Credentials!", data: req.body});
  }

  const token = jwt.sign({_id:foundUser._id}, process.env.SECRET,{expiresIn: '24h'});
  res.cookie('token',token, {httpOnly: true, maxAge: (((24 * 60) * 60) * 1000)});
  res.send({success: true, error: false, message: "Login Successful!", data: null})
});

export default router;