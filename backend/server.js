import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import providerRoutes from "./routes/providerRoutes.js";
import chatbotRoutes from "./routes/chatbotRoutes.js";


// ===============================
// CONFIG
// ===============================
dotenv.config();

const app = express();

// ===============================
// MIDDLEWARE
// ===============================
app.use(cors());
app.use(express.json()); // JSON data read karne ke liye

// ===============================
// ROUTES
// ===============================
//app.use("/api", providerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/provider", providerRoutes);
app.use("/api/chatbot", chatbotRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Sahayak Backend Running Successfully");
});

// ===============================
// MONGODB CONNECTION
// ===============================
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

// ===============================
// SERVER START
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
