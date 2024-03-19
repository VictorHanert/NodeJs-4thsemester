import { homepagePage, 
    assignment_descriptionPage, 
    week1Page,
    week2Page,
    week3Page,
    week4Page,
    week5Page,
    week6Page } from '../util/readPages.js';

import { Router } from "express";

const router = Router();

// =========== HTML ============
router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/assignment", (req, res) => {
    res.send(assignment_descriptionPage);
});

router.get("/week1", (req, res) => {
    res.send(week1Page);
});
router.get("/week2", (req, res) => {
    res.send(week2Page);
});
router.get("/week3", (req, res) => {
    res.send(week3Page);
});
router.get("/week4", (req, res) => {
    res.send(week4Page);
});
router.get("/week5", (req, res) => {
    res.send(week5Page);
});
router.get("/week6", (req, res) => {
    res.send(week6Page);
});

export default router;