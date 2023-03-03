const mongoose = require('mongoose')

const schema = mongoose.Schema({
    todo : String
})

const todoModel = mongoose.model('todos', schema)

module.exports = todoModel