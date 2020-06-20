const mongoose = require("mongoose");

const developerSchema = mongoose.Schema({
    income: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    positionType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    skillsList: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Developer", developerSchema);