import { homepagePage, matchesPage, contactPage } from '../util/readPages.js';
import { Router } from "express";

const router = Router();

// =========== HTML ============
router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
});

router.get("/page", (req, res) => {
    res.send("<div><h1>This is a page</h1><p>Some information</p></div>")
});

export default router;