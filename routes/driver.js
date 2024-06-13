const express = require("express");
const router = express.Router();
const {
  handlePostSignupDriver,
  upload,
  handleGetProfile,
} = require("../controllers/driver");

router.post(
  "/signup",
  upload.fields([
    { name: "driverLicense", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  handlePostSignupDriver
);

router.get("/profile/:id", handleGetProfile);
module.exports = router;
