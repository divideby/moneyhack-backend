const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello");
});

app.listen(8000, function() {
  console.log("Our server on 8000 port");
});
