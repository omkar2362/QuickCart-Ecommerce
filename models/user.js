import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,   // Clerk user ID
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    cartItems: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,   // createdAt & updatedAt automatically
    minimize: false,
  }
);

// Prevent model overwrite error (Next.js fix)
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;