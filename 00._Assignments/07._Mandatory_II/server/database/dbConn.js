import { MongoClient } from "mongodb";
import "dotenv/config";

const dbConnection = () => {
  const url = process.env.MONGO_URL ?? "mongodb://localhost:27017";
  const client = new MongoClient(url);
  const dbName = process.env.MONGO_DB_NAME ?? "database";
  const collName = process.env.MONGO_COLLECTION_NAME ?? "collection";
  const db = client.db(dbName);
  const collection = db.collection(collName);

  if (db && collection) console.log("DB and Collection good to go!");

  return {
    DB: db,
    Coll: collection,
  };
};

export default dbConnection();
