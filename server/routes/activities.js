const express = require("express");
const router = express.Router();
const Activity = require("../models/activity");

router.route("/").get(async (req, res) => {
  const activities = await Activity.find()
    .then((activities) => {
      return activities;
      res.json(activities);
    })
    .catch((err) => {
      console.log("this should popu pthis time iguess ", err);

      return err;
      res.status(400).json("Error: " + err);
    });

  console.log("where is this console logging i", activities);

  res.json(activities);
});

module.exports = router;
