/**
 * for express web api server
 */
const bodyParser = require("body-parser");
require("./db");
const customer = require("./Controller/CustomerController");
const cors = require("cors");
const module = require("path");

const express = require("express");
const app = express();

//added middleware code
app.use(cors());
app.use(bodyParser.json());
app.use("/customers_get_3", customer);
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const port = process.env.port || 8080;
app.listen(port, () => {
  console.log(`server listening at port :${port}`);
});
