import { Router } from "express";
const router = Router();

function greeter(req, res, next) {
  console.log("Hello");
  next();
}

// Middleware function
function doorman(req, res, next) {
  if (req.query.secret?.toLowerCase() === "abc") {
    console.log("Access granted");
    next();
  } else {
    res.status(401).send({ message: "Access denied" });
  }
}

router.get("/room", doorman, greeter, (req, res, next) => {
  console.log("Room 1");
  res.send({ message: "Room 1" });
});

// inline middleware
router.get(
  "/room",
  greeter,
  (req, res, next) => {
    console.log("Going into next room 2");
    next();
  },
  (req, res, next) => {
    console.log("Room 2");
    res.send({ message: "Room 2" });
  }
);

export default router;
