const { ObjectId } = require('mongodb')
const Todo = require('../models/todo')

const fetchAllTodoService = async () => {
    try {
        const res = await Todo.find({})
        return res
    } catch (e) {
        throw new Error(e.message)
    }
}

const fetchTodoService = async (id) => {
    try {
        const res = await Todo.find({ _id: ObjectId(id) })
        return res
    } catch (e) {
        throw new Error(e.message)
    }
}

const addTodoService = async (title, body) => {
    try {
        const newTodo = new Todo({
            title: title,
            body: body,
            date: new Date(),
            lastUpdate: new Date()
        })

        const savedTodo = newTodo.save((err) => {
            if (err) throw new Error("Failed to add todo")
        })
        return savedTodo

    } catch (e) {
        throw new Error(e.message)
    }
}

const updateTodoService = async (id, title, body) => {
    try {
        await Todo.updateOne({ _id: ObjectId(id) }, {
            title: title,
            body: body,
            lastUpdate: new Date()
        }, (err) => {
            if (err) throw new Error("Failed to update todo")
        })
    } catch (e) {
        throw new Error(e.message)
    }
}

const deleteTodoService = async (id) => {
    try {
        await Todo.deleteOne({ _id: ObjectId(id) },
            (err) => {
                if (err) throw new Error("Failed to delete todo")
            })
    } catch (e) {
        throw new Error(e.message)
    }
}

module.exports = {
    fetchAllTodoService,
    fetchTodoService,
    addTodoService,
    updateTodoService,
    deleteTodoService
}