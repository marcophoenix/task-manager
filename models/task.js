const mongoose = require('mongoose')


const taskschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name for directory"],
        trim: true,
        maxlenght: [20, "lenght is less than 20"],
    },
    complete: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', taskschema)