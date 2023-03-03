const mongoose = require('mongoose')

const schema = mongoose.Schema({
    todo : String,
    finished: {
        type: String,
        default: false
    }
})

const todoModel = mongoose.model('todos', schema)

module.exports = todoModel