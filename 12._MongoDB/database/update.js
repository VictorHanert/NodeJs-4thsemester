import db from "./connection.js";

const result = await db.types.updateOne(
  { name: "Vanilla" },
  { $set: { description: "Boooring" } }
);

console.log(result);
