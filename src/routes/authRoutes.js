const express = require("express");
const { body } = require("express-validator");
const { registerUser,loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  loginUser
);

router.get("/me", authMiddleware, async (req, res) => {
  res.status(200).json({
    message: "Token valid",
    userId: req.user.userId
  });
});

module.exports = router;