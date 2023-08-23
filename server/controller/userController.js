const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (req, res) => {
  let { name, email, password, DOB, number } = req.body;

  if (!name || !email || !password || !DOB || !number) {
    return res.status(400).json({
      status: false,
      message: "Input Fields are mandatory",
    });
  }

  if (!/^[a-zA-Z ]*$/.test(name)) {
    return res.status(400).json({
      status: false,
      message: "Invalid Name",
    });
  }

  if (
    !/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return res.status(400).json({
      status: false,
      message: "Invalid Email",
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      status: false,
      message: "Invalid Password",
    });
  }

  if (!/^\d{10}$/.test(number)) {
    return res.status(400).json({
      status: false,
      message: "Invalid Number",
    });
  }

  const userDOB = new Date(DOB);
  const currentDate = new Date();
  const userAge = currentDate.getFullYear() - userDOB.getFullYear();

  if (isNaN(userDOB.getTime()) || userAge < 13) {
    return res.status(400).json({
      status: false,
      message: "User must be older than 13 years old",
    });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser !== null) {
    return res.status(400).json({
      status: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  if (!hashedPassword) {
    return res.status(500).json({
      status: false,
      message: "Error in hashing the password",
    });
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    number,
    DOB,
    image: `https://api.dicebear.com/5.x/initials/svg?seed=${name} `,
  });
  const savedUser = await newUser.save();

  return res.status(200).json({
    status: true,
    message: savedUser,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "Input Fields are mandatory",
    });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Invalid username or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      status: false,
      message: "Invalid Password",
    });
  } else {
    const accessToken = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({
      status: true,
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        number: user.number,
        DOB: user.DOB,
      },
      token: accessToken,
      expiresIn: "1h",
    });
  }
});

const currentUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById({ _id: id });
  if (!user) {
    return res.status(404).json({
      status: false,
      message: "User not found",
    });
  }

  return res.status(200).json({
    status: true,
    message: user,
  });
});

module.exports = { createUser, loginUser, currentUser };
