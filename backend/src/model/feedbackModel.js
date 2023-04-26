const mongoose = require('mongoose')

let feedbackSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Feedback:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("feedback", feedbackSchema);