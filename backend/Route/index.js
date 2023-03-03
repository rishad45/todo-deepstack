const express = require('express')
const router = express.Router()
const model = require('../Model/todoModel')
const controller = require('../Controllers/index')
router.post('/create-todo',controller.create)

router.get('/getTodo', controller.getTodo)

router.post('/delete-todo', controller.deleteTodo)

router.post('/update-todo', controller.updateTodo)

router.get('/getFinishedTodo', controller.getFinishedTodo)

module.exports = router

