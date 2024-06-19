require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.use(bodyParser.json());

const productRoutes = require("./routes/index");
app.use("/", productRoutes);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});

// app.post("/upload", (req, res) => {
//   res.send("Uploaded successfully");
// });

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
