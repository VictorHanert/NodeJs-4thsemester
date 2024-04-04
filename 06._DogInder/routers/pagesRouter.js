import { homepagePage, contactPage, matchesPage } from '../util/readPages.js';
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

export default router;

