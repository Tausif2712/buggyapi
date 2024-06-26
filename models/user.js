const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    version: {
      type: String,
    },
    device: {
      type: String,
      enum: ["Android", "ios"],
      default: "ios",
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    totalReferral: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Active", "Deactive"],
      default: "Active",
    },
    deleteFlag: {
      type: Boolean,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      default: "Rider",
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
module.exports = User;
