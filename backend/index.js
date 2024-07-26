const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Router/AuthRouter");
const ProductRouter = require("./Router/ProductRouter");

require("dotenv").config;
require("./Models/db");

const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  //   res.send("kailash sen");
  console.log(`server is start ${PORT}`);
});
