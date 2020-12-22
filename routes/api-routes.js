const router = require("express").Router();
const db = require("../models");

//Get existing workout data
router.get("/api/workouts", (req, res) => {
    console.log("api GET workouts running");
    db.Workout.find({})
        .sort({ date: 1 }) //sort to get the most recent workout
        .populate("exercises") //get the data about individual exercises, otherwise they're just objectIds
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
    console.log(req.params); //Params.id is the workout we'll be adding our exercise to
    db.Exercise.create(req.body)  //Push our exercise ID to link it to the given workout, and increase the total time bu the current exercise's duration
        .then(({ _id }) => db.Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: _id }, $inc: {totalDuration: req.body.duration}}, { new: true }))
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


//Gets stats for all workouts for charting
router.get("/api/workouts/range", (req, res) => {
    console.log("api GET range running");
    db.Workout.find({})
        .sort({ date: 1 }) //sort to get the most recent workout
        .populate("exercises") //get the data about individual exercises, otherwise they're just objectIds
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});


module.exports = router;
