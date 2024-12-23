const express = require("express");
const connection = require("./DB_cannection");
const cors = require("cors");
require("dotenv").config();
const STUDENT_ROUTES = require("./Router/Student_Router");
const ADMIN_ROUTES=require("./Router/Admin_Routes")
const EVENTS_ROUTES= require("./Router/Events_Routes");
const Enrollment_Routes = require("./Router/Enrollment_Routes")

const app = express();
const PORT = process.env.PORT || 8005;

connection(process.env.DB_URL)
  .then(() => console.log("DB CONNECTED ........"))
  .catch((e) => console.log("ERROR: ", e));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    msg: "HEELO CODER DO NOT WORRY SERVER IS RUNNING FINE......",
  });
});
app.use("/", STUDENT_ROUTES);
app.use("/", ADMIN_ROUTES);
app.use("/", EVENTS_ROUTES);
app.use("/", Enrollment_Routes);
app.listen(PORT, () => {
  console.log("SERVOR IS UP AT PORT NUMBER ",PORT);
});
