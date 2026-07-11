import mongoose from "mongoose";

const providerSchema = new mongoose.Schema(
  {
    // 👤 Basic Info
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    // 🛠 Service Details
    service: {
      type: String,
      required: true
    },

    experience: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    charges: {
      type: Number,
      required: true
    },

    // 📊 Status
    isAvailable: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model(
  "Provider",
  providerSchema
);
