const express = require("express");
const router = express.Router();
const { handlePostSignup, handleGetProfile } = require("../controllers/user");
//Get

router.get("/profile/:id", handleGetProfile);

//Post
router.post("/signup", handlePostSignup);
router.post("/ride/history");
module.exports = router;
