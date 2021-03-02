const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;
const axios = require("axios");
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.get("/api/get", (req, res) => {
  axios
    .get("https://api.wazirx.com/api/v2/tickers")
    .then((response) => {
      var objectResponse = Object.entries(response.data)
        .slice(0, 10)
        .map((coinInfo) => coinInfo[1]);
      return res.status(200).json(objectResponse);
    })
    .catch((e) => res.status(500).json({ error: e }));
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
