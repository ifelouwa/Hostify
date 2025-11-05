import User from "../Models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendEmail } from "../Utils/sendemail.js";

//Generate JWT Token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

//Register a new user
export const registerUser = async (req, res) => {
  try {
    const { name, username, email, password, phone, role } = req.body;

    //Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Create new user
    const newUser = await User.create({ name, username, email, password, phone, role });

    //Send welcome email
    try {
      await sendEmail(
        newUser.email,
        "Welcome to Hostify!",
        newUser.username,
        `Welcome to <b>HOSTIFY</b>, your trusted Lounge Management platform. 
        Your account has been created successfully. Explore exclusive Bookings, 
        Order premium Dishes, and enjoy secure transactions.`,
        "https://hostify.com" // replace with your actual hosted URL later
);

    } catch (emailErr) {
      console.log("Email failed:", emailErr.message);
    }

    //Generate token
    const token = generateToken(newUser);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    //Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    //Generate token
    const token = generateToken(user);

    res.status(200).json({
      message: "User logged in successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
