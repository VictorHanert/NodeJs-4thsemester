import { Router } from "express";
const router = Router();

const users = [
    {
        username: "admin",
        password: "admin"
    }
];

router.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        req.session.username = username;
        res.send({ data: "You have been logged in" });
    } else {
        res.status(401).send({ error: "Invalid username or password" });
    }
});

router.post("/api/logout", (req, res) => {
    req.session.destroy();
    res.send({ data: "You have been logged out" });
});

router.get("/api/users", (req, res) => {
    res.send({ data: users });
});

export default router;