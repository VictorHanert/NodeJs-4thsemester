import { Router } from "express";
const router = Router();

import jwt from 'jsonwebtoken';
import dbConn from '../dbConn.js';
import dotenv from 'dotenv';
dotenv.config();
import {ObjectId} from 'mongodb';

const findUserById = async (collection,userId)=>{
  const User = await collection.find({_id: ObjectId(userId)}).toArray();
  return User[0]
}

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const cookie = req.cookies['token'];

  try{
    const claims = jwt.verify(cookie,process.env.SECRET);
    if(!claims)res.status(401).json({success: false, error: true, message: "No Auth!", data: null})
    const user = await findUserById(dbConn.Coll, claims._id);
    const {password,...userMinusPassword} = user ;
    res.json({success: true, error: false, message: "Authorized Please Proceed!", data: userMinusPassword});
  }catch(error){
    res.status(500).json({success: false, error: true, message: "jwt Error", data: null})
  }

});

export default router;