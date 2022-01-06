const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(
  cors({
    origin: "*",
  })
);

axios
  .get("https://news-data-bidchadna.herokuapp.com/news-data")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
