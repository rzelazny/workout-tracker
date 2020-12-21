const router = require("express").Router();
var path = require("path");

//go home, default path
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//path for getting exercise data
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//path for displaying stats
router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;