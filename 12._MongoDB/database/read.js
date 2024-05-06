import db from "./connection.js";

const firstIceCreamBrand = await db.brands.find().toArray();

console.log(firstIceCreamBrand);