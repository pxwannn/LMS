import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required."
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email."
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword
    });

    // Optional: directly login the user after register
    return generateToken(res, newUser, "Account created successfully.");

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to register"
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required."
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist"
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password"
      });
    }

    return generateToken(res, user, `Welcome back, ${user.name}`);

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to login"
    });
  }
};
