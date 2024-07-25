const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors());

const publicPath = path.join(__dirname, "api");

app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.send("OK");
});

app.get("/api/localize/:lang", (req, res) => {
    const lang = req.params.lang;
    res.sendFile(path.join(publicPath, `localize/${lang}.json`));
});

app.get("/api/localize/list", (req, res) => {
    res.json({
        "en": "English"
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is running on the port ${port}`);
});
