require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
