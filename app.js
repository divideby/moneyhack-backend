const express = require("express");
const Web3 = require("web3");

const app = express();
const web3 = new Web3();

app.get("/", function(req, res) {
  res.send("Hello");
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
