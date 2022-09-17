const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    postmaker: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'UserModel'
    },
    time: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('ThoughtModel', thoughtSchema);