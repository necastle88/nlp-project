const dotenv = require("dotenv");
dotenv.config();

let path = require("path");
const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

let data = {};

const MeaningCloudAPI = {
  application_key: process.env.API_KEY,
};

const app = express();
const port = 8081;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "../../dist" });
});

app.listen(port, function () {
  console.log("Example app listening on port " + port);
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.post("/data", async (req, res) => {
  console.log("posting data...");

  // Meaning Cloud API
  const API = {
    key: process.env.API_KEY,
    apiUrl: "https://api.meaningcloud.com/sentiment-2.1",
    lang: "en",
    text: "some rando texts"
  };

  const requestOptions = {
    method: "POST"
  };

  const response = await fetch(
      `${API.apiUrl}?key=${API.key}&lang=${API.lang}&txt=${API.text}&model=general`, requestOptions
      );
  try {
    const apiData = await response.json();
    Object.assign(data, apiData);
    res.send(data);
  } catch (error) {
    console.log("error", error);
  }
});
