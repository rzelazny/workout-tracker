const router = require("express").Router();
var path = require("path");

//go home, default path
router.get("/", function(req, res) {
    console.log("html get home");
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//path for adding an exercise
router.get("/exercise", function(req, res) {
    console.log("html get exercise");
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//path for displaying stats
router.get("/stats", function(req, res) {
    console.log("html get stats");
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;