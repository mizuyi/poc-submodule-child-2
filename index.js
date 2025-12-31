const express = require("express");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from Backend" });
});

app.listen(3001, "0.0.0.0");
