import { Router } from "express";
import db from "../database/connection.js"
const router = Router();

router.get("/api/volcanoes", async (req, res) => {
    const result = await db.all('SELECT * FROM volcanoes;');
    res.send({ data: result })
})

router.post("/api/volcanoes", async (req, res) => {
    const { name, location, elevation, is_active } = req.body;

    if (!name) {
        return res.status(400).send({ data: "Missing name"})
    }
    if (!location) {
        return res.status(400).send({ data: "Missing location"})
    }
    if (is_active === undefined || is_active === null) {
        return res.status(400).send({ data: "Missing key: isActive"})
    }
    if (!elevation) {
        return res.status(400).send({ data: "Missing elavation (fx: 1240)"})
    }

    const result = await db.run(
        `INSERT INTO volcanoes (name, location, elevation, is_active)
        VALUES ('?', '?', ?, ?);
        `);
    res.send({ data: {lastId: result.lastID} })
})

export default router;
