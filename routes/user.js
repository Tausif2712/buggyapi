const express = require("express");
const router = express.Router();

router.post("/signup", handlePostSignup);

module.exports = {
  router,
};
