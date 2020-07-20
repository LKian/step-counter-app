const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const router = express.Router();

// route: use this file and call it "activities"
const activities = require("./routes/activities");

dotenv.config();

const port = process.env.PORT;
const db = process.env.ATLAS_URI;

app.use(express.json());
app.use("/", activities);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB connection successfully established!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
