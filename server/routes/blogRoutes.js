const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPost,
  getPostWithAuthor,
} = require("../controller/blogController");
const authenticateToken = require("../middleware/validateToken");

router.post("/:id", authenticateToken, createPost);
router.put("/update/:id", authenticateToken, updatePost);
router.delete("/delete/:id", authenticateToken, deletePost);
router.get("/", getAllPosts);
router.get("/:id", authenticateToken, getPost);
router.get("/author/:id", getPostWithAuthor);

module.exports = router;
