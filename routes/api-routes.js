const router = require("express").Router();
const db = require("../models");

//Get existing workout data
router.get("/api/workouts", (req, res) => {
    console.log("api GET workouts running");
    db.Workout.find({})
        .sort({ date: 1 })
        .populate("exercises")
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Create a new workout session
router.post("/api/workouts", ({ body }, res) => {
    console.log("api POST workouts running");
    console.log(body);
    db.Workout.create({body})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

//Add exercise data to a workout
router.put("/api/workouts/:id", (req, res) => {
    console.log("api PUT workouts running");
    console.log(req.params);
    db.Exercise.create(req.body)
    console.log(req.body.duration)
        .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: _id }, $inc: {totalDuration: req.body.duration}}, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});

module.exports = router;
