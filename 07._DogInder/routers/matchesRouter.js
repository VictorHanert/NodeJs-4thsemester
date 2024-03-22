import { Router } from "express";
import matchesPage from '../util/matches.js';

const router = Router();

router.get('/api/matches', async (req, res) => {
    const matches = await matchesPage();
    res.send({ data: matches });
});

export default router;