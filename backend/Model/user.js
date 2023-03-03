const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    password: String,
    email: String
})

const userModel = mongoose.model('users', schema)

module.exports = userModel