const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { collection: "Steps" }
);

const Activity = mongoose.model("Steps", activitySchema);

module.exports = Activity;

// whatever, i guess i will add a collection in future projects, i don't get it.  maybe it's optional unless there is more than one
