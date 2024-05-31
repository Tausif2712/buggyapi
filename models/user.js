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
      require: true,
    },
    version: {
      tuype: String,
      require: true,
    },
    device: {
      enum: [Android, ios],
      require: true,
    },
    Roel: {
      default: "Rider",
    },
    dateOfBirth: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    totalReferral: {
      type: Number,
    },
    status: {
      type: Boolean,
      default: true,
    },
    deleteFlag: {
      type: Boolean,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
module.exports = User;
