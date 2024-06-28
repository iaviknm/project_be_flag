require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());

app.use(express.static("uploads"));

const productRoutes = require("./routes/index");
app.use("/", productRoutes);

app.get("/", (req, res) => {
  console.log("[GET ROUTE]");
  res.send("HELLO FROM HOMEPAGE");
});

app.get("/products", (req, res) => {
  const query = "SELECT id, name, price FROM products";
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});
