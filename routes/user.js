const express = require("express");
const router = express.Router();
const { handlePostSignup } = require("../controllers/user");

router.post("/signup", handlePostSignup);

module.exports = router;
