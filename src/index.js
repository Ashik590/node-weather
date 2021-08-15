const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log("listening to the port number 3000");
});
