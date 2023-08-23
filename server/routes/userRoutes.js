const express = require("express");
const {
  createUser,
  loginUser,
  currentUser,
} = require("../controller/userController");
const authenticateToken = require("../middleware/validateToken");
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/:id", authenticateToken,currentUser);

module.exports = router;
