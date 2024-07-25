const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/api/localize/:lang", (req, res) => {
  const lang = req.params.lang;
  res.sendFile(path.join(__dirname, "api/localize", `${lang}.json`));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
