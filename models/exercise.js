const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    distance: {
        type: Number,
        required: "Enter an amount"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
