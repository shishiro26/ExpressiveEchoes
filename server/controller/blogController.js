const Blog = require("../model/blogModel");
const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");

const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const id = req.params.id;
  if (!title) {
    return res.status(400).json({
      status: false,
      message: "Title can't be empty",
    });
  }
  if (!content) {
    return res.status(400).json({
      status: false,
      message: "content can't be empty",
    });
  }

  const user = User.findById(id);

  if (!user) {
    res.status(404).json({
      status: false,
      message: "User not found",
    });
  }

  const post = new Blog({
    title: title,
    content: content,
    author: {
      _id: id,
      name: user.name,
    },
  });

  const savedPost = await post.save();

  return res.status(200).json({
    status: true,
    message: savedPost,
  });
});

const updatePost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const id = req.params.id;
  console.log(id);

  const updatePost = await Blog.findOne({ _id: id });

  if (!updatePost) {
    res.status(404).json({
      status: false,
      message: "Blog with the given id don't exist",
    });
  }

  updatePost.title = title;
  updatePost.content = content;

  const updatedPost = await updatePost.save();

  return res.status(200).json({
    status: true,
    message: updatedPost,
  });
});

const deletePost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deletePost = await Blog.findOne({ author: id });

  if (!deletePost) {
    return res.status(404).json({
      status: false,
      message: "Blog with the id don't exist",
    });
  }

  await deletePost.deleteOne({ author: id });
  return res.status(200).json({
    status: true,
    message: "Successfully deleted the contact",
    data: deletePost,
  });
});

const getAllPosts = asyncHandler(async (req, res) => {
  const getPosts = await Blog.find();

  if (!getPosts) {
    return res.status(400).json({
      status: false,
      message: "Error while fetching the blogs",
    });
  }

  return res.status(200).json({
    status: true,
    message: getPosts,
  });
});

const getPost = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const getPost = await Blog.findOne({ _id: id });

  if (!getPost) {
    return res.status(400).json({
      status: false,
      message: `No post found for ID ${id}`,
    });
  }
  return res.status(200).json({
    status: true,
    message: getPost,
  });
});

const getPostWithAuthor = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const getPost = await Blog.find({ author: id });

  if (!getPost) {
    return res.status(400).json({
      status: false,
      message: `No post found for ID ${id}`,
    });
  }
  return res.status(200).json({
    status: true,
    message: getPost,
  });
});
module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPost,
  getPostWithAuthor,
};
