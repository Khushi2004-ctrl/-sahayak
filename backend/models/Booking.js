import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    // 🔗 User who booked
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    // 👨‍🔧 Assigned Provider
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      default: null
    },

    // 🛠 Category
    serviceCategory: {
      type: String,
      required: true,
      trim: true
    },

    // 🔧 Service Name
    service: {
      type: String,
      required: true,
      trim: true
    },

    // 📍 Location
    location: {
      type: String,
      required: true,
      trim: true
    },

    // 📅 Booking DateTime (merged)
    bookingDate: {
      type: Date,
      required: true
    },

    // 🚨 Emergency
    emergency: {
      type: Boolean,
      default: false
    },

    // 📝 Notes
    notes: {
      type: String,
      trim: true
    },

    // 📊 Status (STRICT)
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "rejected","cancelled"],
      default: "pending"
    },

    // 💰 Charges
    charges: {
      type: Number,
      default: 0,
      min: 0
    }

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);