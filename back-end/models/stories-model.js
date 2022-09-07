const mongoose = require('mongoose')

const storySchema = new mongoose.Schema({
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

module.exports = mongoose.model('StoryModel', storySchema);