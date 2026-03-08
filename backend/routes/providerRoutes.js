import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Provider from "../models/Provider.js";
import Booking from "../models/Booking.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:service/:location", async (req, res) => {
  try {

    const { service, location } = req.params;

    const providers = await Provider.find({
      service,
      location,
      isAvailable: true
    });

    res.json(providers);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/booking/:id", authMiddleware, async (req, res) => {
  try {

    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    res.json({
      msg: "Booking updated successfully",
      booking
    });

  } catch (error) {
    console.log("UPDATE BOOKING ERROR:", error);
    res.status(500).json({ msg: "Booking update failed" });
  }
});


// ================= PROVIDER REGISTER =================
router.post("/register", async (req, res) => {
  try {

    const {
      name,
      email,
      phone,
      password,
      service,
      experience,
      location,
      charges
    } = req.body;

    console.log("Incoming Provider Data:", req.body);

    if (!name || !email || !phone || !password || !service) {
      return res.status(400).json({
        msg: "All fields required"
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        msg: "Password must be 6+ chars"
      });
    }

    const lowerEmail = email.toLowerCase();

    const existing = await Provider.findOne({ email: lowerEmail });

    if (existing) {
      return res.status(400).json({
        msg: "Provider already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const provider = new Provider({
      name,
      email: lowerEmail,
      phone,
      password: hashedPassword,
      service,
      experience,
      location,
      charges
    });

    const savedProvider = await provider.save();

    console.log("Provider Saved:", savedProvider);

    res.status(201).json({
      msg: "Provider registered successfully",
      provider: {
        id: savedProvider._id,
        name: savedProvider.name,
        email: savedProvider.email
      }
    });

  } catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      error: "Provider registration failed"
    });
  }
});


// ================= PROVIDER LOGIN =================
router.post("/login", async (req, res) => {
  try {

    let { email, password } = req.body;

    email = email.toLowerCase();

    const provider = await Provider.findOne({ email });

    if (!provider) {
      return res.status(400).json({
        msg: "Provider not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      provider.password
    );

    if (!isMatch) {
      return res.status(400).json({
        msg: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: provider._id,
        role: "provider"
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      msg: "Provider login successful",
      token,
      provider: {
        id: provider._id,
        name: provider.name,
        service: provider.service
      }
    });

  } catch (error) {

    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      error: "Login failed"
    });
  }
});


// ================= PROVIDER PROFILE =================
router.get("/profile", authMiddleware, async (req, res) => {
  try {

    const provider = await Provider.findById(req.user.id)
      .select("-password");

    if (!provider) {
      return res.status(404).json({
        msg: "Provider not found"
      });
    }

    res.json(provider);

  } catch (error) {

    console.log("PROFILE ERROR:", error);

    res.status(500).json({
      error: "Profile fetch error"
    });
  }
});


// ================= PROVIDER BOOKINGS =================
router.get("/bookings", authMiddleware, async (req, res) => {
  try {

    const bookings = await Booking.find({
      providerId: req.user.id
    })
      .populate("userId", "name phone")
      .sort({ createdAt: -1 });

       console.log("Bookings found:", bookings);

    res.json({ bookings });

  } catch (error) {

    console.log("BOOKING FETCH ERROR:", error);

    res.status(500).json({
      error: "Error fetching bookings"
    });
  }
});


// ================= ACCEPT BOOKING =================
router.put("/booking/:id/accept", authMiddleware, async (req, res) => {
  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        msg: "Booking not found"
      });
    }

    booking.providerId = req.user.id;
    booking.status = "accepted";

    await booking.save();

    res.json({
      msg: "Booking accepted",
      booking
    });

  } catch (error) {

    console.log("ACCEPT ERROR:", error);

    res.status(500).json({
      error: "Accept failed"
    });
  }
});


// ================= COMPLETE BOOKING =================
router.put("/booking/:id/complete", authMiddleware, async (req, res) => {
  try {

    const booking = await Booking.findById(req.params.id);

    booking.status = "completed";

    await booking.save();

    res.json({
      msg: "Service completed",
      booking
    });

  } catch (error) {

    console.log("COMPLETE ERROR:", error);

    res.status(500).json({
      error: "Completion failed"
    });
  }
});


// ================= PROVIDER DASHBOARD =================
router.get("/dashboard", authMiddleware, async (req, res) => {
  try {

    const providerId = req.user.id;

    const totalBookings =
      await Booking.countDocuments({ providerId });

    const pending =
      await Booking.countDocuments({
        providerId,
        status: "pending"
      });

    const accepted =
      await Booking.countDocuments({
        providerId,
        status: "accepted"
      });

    const completed =
      await Booking.countDocuments({
        providerId,
        status: "completed"
      });

    const completedBookings = await Booking.find({
      providerId,
      status: "completed"
    });

    const earnings = completedBookings.reduce(
      (sum, booking) => sum + (booking.charges || 0),
      0
    );

    res.json({
      totalBookings,
      pending,
      accepted,
      completed,
      earnings
    });

  } catch (error) {

    console.log("DASHBOARD ERROR:", error);

    res.status(500).json({
      error: "Dashboard fetch failed"
    });
  }
});


// ================= ALL PROVIDERS =================
router.get("/all", async (req, res) => {

  const providers = await Provider.find()
    .select("-password");

  res.json(providers);

});

export default router;