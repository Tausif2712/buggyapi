const express = require("express");
const router = express.Router();
const {
  handlePostSignup,
  handleGetProfile,
  upload,
  handleDeleteRider,
  handelPatchRider,
} = require("../controllers/user");
//Get

router.get("/profile/:id", handleGetProfile);

//Post
router.post("/signup", upload.single("profileImage"), handlePostSignup);
// router.post("/ride/history");
module.exports = router;

//Update
router.patch("/update/:id", handelPatchRider);
//delete
router.delete("/delete/:id", handleDeleteRider);
