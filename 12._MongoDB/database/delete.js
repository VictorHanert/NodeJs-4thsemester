import db from "./connection.js";

const result = await db.types.deleteOne({ name: "Vanilla" });

console.log(result);