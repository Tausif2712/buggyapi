const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
  {
    long: {
      type: String,
    },
    lat: {
      type: String,
    },
    distance: {
      type: String,
    },
    duration: {
      type: String,
    },
    payment: {
      type: String,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    driver_id: {
      type: Schema.Types.ObjectId,
      ref: "driver",
    },
  },
  { timestamps: true }
);

const Booking = model("booking", bookingSchema);
module.exports = Booking; //exporting the model  so that it can be used in other
