import { ObjectId } from "mongodb";

const findUser = async (collection, user) => {
  const User = await collection.find({ username: user }).toArray();
  return User[0];
};

const findUserById = async (collection, userId) => {
  const User = await collection.find({ _id: ObjectId(userId) }).toArray();
  return User[0];
};

const registerUser = async (collection, user) => {
  const register = await collection.insertOne(user);
  const index = await collection.createIndex({ username: 1 }, { unique: true });
  return register;
};

export { findUser, findUserById, registerUser };
