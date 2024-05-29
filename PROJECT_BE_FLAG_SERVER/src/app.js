require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const productRoutes = require('./routes/index');
app.use('/', productRoutes);


app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
