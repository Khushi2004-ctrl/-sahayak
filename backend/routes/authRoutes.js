console.log("✅ Auth Routes Loaded");

import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// ================= REGISTER =================
router.post("/signup", async (req, res) => {
  try {
    let { name, email, phone, password, role } = req.body;
console.log("Signup role:", role);
    // 🔹 Validation
    if (!name || !email || !phone || !password || !role) {
      return res.status(400).json({
        msg: "All fields are required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        msg: "Password must be at least 6 characters"
      });
    }

    email = email.toLowerCase();

    // 🔹 Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        msg: "User already exists"
      });
    }

    // 🔹 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔹 Create user
    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role
    });

    await user.save();

    // 🔹 Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      msg: "Signup successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    res.status(500).json({
      msg: "Server error during signup"
    });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    let { email, password  } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Email & password required"
      });
    }

    email = email.toLowerCase();

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    res.status(500).json({
      msg: "Server error during login"
    });
  }
});


// ================= PROFILE =================
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        msg: "User not found"
      });
    }

    res.json(user);

  } catch (error) {
    res.status(500).json({
      msg: "Profile fetch error"
    });
  }
});


// ================= GET ALL USERS =================
router.get("/all", async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.json(users);

  } catch (error) {
    res.status(500).json({
      msg: "Error fetching users"
    });
  }
});

export default router;