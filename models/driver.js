const { Schema, model } = require("mongoose");
const driverSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
      required: true,
    },
    device: {
      type: String,
      enum: ["Android", "ios"],
      required: true,
    },
    role: {
      type: String,
      default: "Driver",
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
      required: true,
    },
    inspection: {
      type: String,
      required: true,
    },
    insurance: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Driver = model("driver", driverSchema);
module.exports = Driver;
