import { Router } from "express";
const router = Router();

router.post('/', function(req, res, next) {
  res.clearCookie('token');
  res.send({success: true, error: false, message: "Logout Successful!", data: null});
});

export default router;