const router = require("express").Router();
var path = require("path");

router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;