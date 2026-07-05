const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD");
});

app.get("/health", (req, res) => {
    res.send("Application is running");
});
app.get("/ok86", (req, res) => {
    console.log("ok86");
    console.log("ok86git");
    res.send("Application is ok86git");
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});