import { Router } from "express";
import * as pages from '../util/readPages.js';

const router = Router();

const pageRoutes = [
    { path: "/", page: "homepagePage" },
    { path: "/assignment", page: "assignment_descriptionPage" },
    { path: "/week1", page: "week1Page" },
    { path: "/week2", page: "week2Page" },
    { path: "/week3", page: "week3Page" },
    { path: "/week4", page: "week4Page" },
    { path: "/week5", page: "week5Page" },
    { path: "/week6", page: "week6Page" },
    { path: "/week7", page: "week7Page" },
];

pageRoutes.forEach(route => {
    router.get(route.path, (req, res) => {
        res.send(pages[route.page]);
    });
});

export default router;