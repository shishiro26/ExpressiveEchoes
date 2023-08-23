const mongoose = require("mongoose");
const User = require("./userModel");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
