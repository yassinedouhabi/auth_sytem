import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //   Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    //   Hash the password
    const hashPassword = await bcrypt.hash(password, 10);

    //   Create a new user
    const newUser = new User({ name, email, password: hashPassword });
    await newUser.save();

    return res.status(201).json({ message: "Successfully Created" });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
