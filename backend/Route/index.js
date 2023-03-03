const express = require('express')
const router = express.Router()
const model = require('../Model/todoModel')
router.post('/create-todo', async (req, res) => {
    const { todo } = req.body
    await model.create({
        todo
    }).then(() => {
        return res.status(200).send({ message: 'Todo created' })
    }).catch((err) => {
        console.log(err)
        return res.status(500).send({ message: 'error' })
    })
})

router.get('/getTodo', async (req, res) => {
    try {
        const results = await model.find({})
        res.send(200).send({results})
    } catch (error) {
        res.status(500).send({error})
    }
})

module.exports = router

