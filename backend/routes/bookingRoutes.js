import express from "express";
import Booking from "../models/Booking.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


// ================= CREATE BOOKING =================
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const {
      serviceCategory,
      service,
      location,
      date,
      time,
      emergency,
      notes,
      providerId,
      charges
    } = req.body;

    if (!serviceCategory || !service || !location || !date || !time) {
      return res.status(400).json({ msg: "Required fields missing" });
    }

    let finalCharges = charges;

    if (!finalCharges) {
      if (service === "Mechanic") finalCharges = 500;
      else if (service === "Electrician") finalCharges = 400;
      else if (service === "Plumber") finalCharges = 350;
      else if (service === "Cook") finalCharges = 600;
      else finalCharges = 300;
    }

    const booking = new Booking({
      userId: req.user.id,
      providerId: providerId || null,
      serviceCategory,
      service,
      location,
      bookingDate: new Date(`${date}T${time}`),
      emergency: emergency || false,
      notes: notes || "",
      charges: finalCharges,
      status: "pending"
    });

    await booking.save();

    res.status(201).json({
      msg: "Booking created successfully",
      booking
    });

  } catch (error) {
    console.log("CREATE BOOKING ERROR:", error);
    res.status(500).json({ error: "Booking creation failed" });
  }
});


// ================= USER BOOKINGS =================
router.get("/user-bookings", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("providerId", "name phone service")
      .sort({ createdAt: -1 });

    res.json({bookings});

  } catch (error) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});


// ================= USER CANCEL BOOKING =================
router.put("/cancel/:id", authMiddleware, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    if (booking.userId.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    if (booking.status !== "pending") {
      return res.status(400).json({
        msg: "Only pending bookings can be cancelled"
      });
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({ msg: "Booking cancelled", booking });

  } catch (error) {
    res.status(500).json({ error: "Cancel failed" });
  }
});


// ================= PROVIDER UPDATE STATUS =================
router.patch("/status/:id", authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = ["accepted", "rejected", "completed"];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({ msg: "Invalid status" });
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ msg: "Booking not found" });
    }

    if (booking.providerId?.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized" });
    }

    // Flow control
    if (status === "completed" && booking.status !== "accepted") {
      return res.status(400).json({
        msg: "Only accepted bookings can be completed"
      });
    }

    booking.status = status;
    await booking.save();

    res.json({
      msg: "Booking status updated",
      booking
    });

  } catch (error) {
    console.log("STATUS UPDATE ERROR:", error);
    res.status(500).json({ error: "Status update failed" });
  }
});


// ================= PROVIDER BOOKINGS =================
router.get("/provider-jobs", authMiddleware, async (req, res) => {
  try {
    const bookings = await Booking.find({
      providerId: req.user.id
    })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ error: "Error fetching provider jobs" });
  }
});


// ================= PROVIDER EARNINGS =================
router.get("/provider-earnings", authMiddleware, async (req, res) => {

  try {

    const jobs = await Booking.find({
      providerId: req.user.id,
      status: "completed"
    });

    const totalEarnings = jobs.reduce((sum, job) => {
      return sum + job.charges;
    }, 0);

    res.json({
      totalEarnings,
      completedJobs: jobs.length
    });

  } catch (error) {

    res.status(500).json({
      msg: "Error fetching earnings"
    });

  }

});
export default router;