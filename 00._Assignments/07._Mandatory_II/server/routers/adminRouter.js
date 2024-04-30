import { Router } from "express";
import { ObjectId } from "mongodb";
import dbConn from "../database/dbConn.js";

const router = Router();

// Get all users with role 'user'
router.get('/users', async (req, res) => {
    const users = await dbConn.Coll.find({ role: 'user' }).toArray();
    res.send(users);
  });

// Delete a user
router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  await dbConn.Coll.deleteOne({ _id: ObjectId(id) });
  res.send({ success: true });
});

export default router;