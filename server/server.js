const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

// route: use this file and call it "activities"
const activitiesRouter = require("./routes/activities");

dotenv.config();

const port = process.env.PORT;
const db = process.env.ATLAS_URI;

app.use(express.json());

// app.use("/", activitiesRouter);

app.get("/", (req, res) => {
  res.send("we're on the homepage");
});
app.get("/abc", (req, res) => {
  res.send("we're on the abc");
});

try {
  mongoose.connect(
    db,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => console.log("Connected successfully to your database!")
  );
} catch (err) {
  console.error("Error: Could not connect to database");
}

app.listen(`${port}`);
