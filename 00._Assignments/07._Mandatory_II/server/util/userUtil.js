import { ObjectId } from "mongodb";

const findUser = async (collection, user) => {
  try {
    const User = await collection.findOne({ username: user });
    return User;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};

const findUserById = async (collection, userId) => {
  try {
    const User = await collection.findOne({ _id: ObjectId(userId) });
    return User;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
};

const registerUser = async (collection, user) => {
  const register = await collection.insertOne(user);
  await collection.createIndex({ username: 1 }, { unique: true });
  return register;
};

export { findUser, findUserById, registerUser };
