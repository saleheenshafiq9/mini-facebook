const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    thoughts: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'ThoughtModel'
    }]
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('UserModel', userSchema);