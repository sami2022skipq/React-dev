const mongoose = require('mongoose')
const { Schema } = mongoose
const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailverification: {
        type: String,
        default: ""

    },
    verfied: {
        type: Boolean,
        default: false

    },

},
    { timestemps: true }
)


module.exports = mongoose.model("users", User)                                                                
