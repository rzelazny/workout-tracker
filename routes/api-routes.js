const router = require("express").Router();
const db = require("../models");

//Get existing workout data
router.get("/api/workouts", (req, res) => {
    console.log("api GET workouts running");
    db.Workout.find({})
        //.populate("exercises")
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
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
            res.status(400).json(err);
        });
});

//Add exercise data to a workout
router.put("/api/workouts/:id", ({ body, params}, res) => {
    console.log("api PUT workouts running");
    console.log(params);
    db.Exercise.create(body)
        .then(({ myId }) => db.Workout.findOneAndUpdate({ _id: params }, { $push: { exercises: myId } }, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;
