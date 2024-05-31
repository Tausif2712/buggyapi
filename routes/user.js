const express = require("express");
const router = express.Router();
const {
  handlePostSignup,
  handleGetProfile,
  upload,
} = require("../controllers/user");
//Get

router.get("/profile", handleGetProfile);

//Post
router.post("/signup", upload.single("profileImage"), handlePostSignup);
// router.post("/ride/history");
module.exports = router;

//Update

//delete
