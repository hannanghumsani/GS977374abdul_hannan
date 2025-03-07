const express = require("express");
const { createRegister, loginUser } = require("../controller/userController");
const authenticateUser = require("../middleware/authMiddleware");
const router = express.Router();
// authenticateUser
router.post("/register", createRegister);
router.post("/login", loginUser);

// loginUser

// createRegister

// router.post("/bulk", createUsers);

module.exports = router;
