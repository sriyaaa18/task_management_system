import express from "express";
import { register, login, me } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";
import loginLimiter from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginLimiter, login);
router.get("/me", protect, me);

export default router;
