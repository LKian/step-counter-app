const express = require("express");
const router = express.Router();

// Activity model
const Activity = require("../models/Activity");
// const { reset } = require("nodemon");

router.get("/", (req, res) => {
  Activity.find()
    .sort({ quantity: -1 })
    .then((activity) => res.json(activity));
});

module.exports = router;
