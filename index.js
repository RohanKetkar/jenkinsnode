const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD");
});

app.get("/health", (req, res) => {
    res.send("Application is running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});