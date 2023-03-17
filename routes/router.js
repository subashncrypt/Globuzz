const express = require("express");

const {
  addTestUser,
  getTestUser,
} = require("../controllers/test-controller");


const {
  getGoogleTrends,
} = require("../controllers/google-trends-controller");

const router = express.Router();

router.get("/google-trends", getGoogleTrends);


router.post("/adduser", addTestUser);
router.get("/getuser", getTestUser);

module.exports = router;
