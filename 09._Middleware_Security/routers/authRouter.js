import { Router } from "express";
const router = Router();

function isAdmin(req, res, next) {
  req.isAdmin = true;
  req.user = {
    name: "Owner if the page"
  }
}

router.get("auth/admin", isAdmin, (req, res, next) => {
  console.log(req,isAdmin, req.user);
  res.send({ message: "Admin room" });
});

export default router;