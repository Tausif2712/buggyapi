const { Schema, model } = require("mongoose");
const driverSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    version: {
      type: String,
    },
    device: {
      type: String,
      enum: ["Android", "ios"],
    },
    role: {
      type: String,
      default: "Driver",
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
    },
    totalReferral: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true,
    },
    driverAverageRating: {
      type: Number,
    },
    driverLicense: {
      type: String,
    },
    inspection: {
      type: String,
    },
    insurance: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Driver = model("driver", driverSchema);
module.exports = Driver;
