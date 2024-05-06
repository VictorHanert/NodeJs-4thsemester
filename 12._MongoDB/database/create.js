import db from "./connection.js";

const result = await db.types.insertOne({
    name: "Vanilla",
    description: "Plain and simple"
});

console.log(result);