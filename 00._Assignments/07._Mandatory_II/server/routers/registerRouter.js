import { Router } from "express";
const router = Router();
import bcrypt from 'bcrypt';
import dbConn from '../dbConn.js';

const registerUser = async (collection, user)=>{
    const register = await collection.insertOne(user);
    const index = await collection.createIndex({ username:1 }, { unique: true });
    return register
}

/* POST users listing. */
router.post('/', async function(req, res, next) {
  console.log(req.body);
  res.header("Access-Control-Allow-Origin", 'http://localhost:5173');
  if(!req.body.username){
    return res.status(500).json({success: false, error: true, message: "Missing Username", data: req.body});
  }
  if(!req.body.password){
    return res.status(500).json({success: false, error: true, message: "Missing Password", data: req.body});
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: hashedPassword
  }

  try{
    const newRegister = await registerUser(dbConn.Coll, newUser);
    res.json({success: true, error: false, message: "Successful Registration!", data: newRegister});
  } catch(error) {
    res.status(500).json({success: false, error: true, message: "Error with db register", data: req.body});
  }
});

export default router;