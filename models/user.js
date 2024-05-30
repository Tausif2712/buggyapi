const { Schema, model } = require("mongoose");
const userSchema = new Schema({
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
  },
  password: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  profileImage: {
    type: String,
  },
});

const User = model("user", userSchema);
module.exports = User;
