const model = require('../Model/todoModel')
const userModel = require('../Model/user')
module.exports = {
    create: async (req, res) => {
        console.log(1)
        const { todo } = req.body
        await model.create({
            todo
        }).then(() => {
            res.status(200).send({ message: 'Todo created' })
        }).catch((err) => {
            console.log(err)
            res.status(500).send({ message: 'error' })
        })
    },

    getTodo: async (req, res) => {
        try {
            const results = await model.find({ finished: false })
            res.status(200).send({ results })
        } catch (error) {
            res.status(500).send({ error })
        }
    },

    getFinishedTodo: async (req, res) => {
        try {
            const results = await model.find({ finished: true })
            res.status(200).send({ results })
        } catch (error) {
            res.status(500).send({ error })
        }
    },

    deleteTodo: async (req, res) => {

        await model.deleteOne({ _id: req.body.id }).then(() => {
            res.status(200).send({ message: 'Deleted' })
        }).catch((err) => {
            res.status(500).send({ message: 'error' })
        })
    },

    updateTodo: async (req, res) => {
        await model.updateOne({ _id: req.body.id }, { $set: { 'finished': true } }).then(() => {
            res.status(200).send({ message: 'Deleted' })
        }).catch((err) => {
            res.status(500).send({ message: 'error' })
        })
    },

    checkLogin: async (req, res) => {
        try {
            let result = await userModel.findOne({ email: req.body.email })
            if (result) {
                if (result.password === req.body.password) {
                    res.status(200).send({ message: 'Login success', success: true })
                } else {
                    res.status(401).send({ message: 'Login unsuccess', success: false })
                }
            } else {
                res.status(401).send({ message: 'No accounrt with this email', success: false })
            }
        } catch (error) {
            res.status(500).send({message: 'error', success: false})
        }
    }


}