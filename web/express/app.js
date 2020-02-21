const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client-react/build", "index.html"));
});

module.exports = app;
