const { addTodoService, fetchAllTodoService, fetchTodoService, updateTodoService, deleteTodoService } = require('../services/todo')

const fetchAllTodo = async (req, res, next) => {
    try {
        const todos = await fetchAllTodoService()
        res.send(todos)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(error())
    }
}

const fetchTodo = async (req, res, next) => {
    try {
        const { id } = req.query
        const todo = await fetchTodoService(id)
        res.send(todo)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(error())
    }
}

const addTodo = async (req, res, next) => {
    const { title, body } = req.body
    try {
        await addTodoService(title, body)
        res.sendStatus(201)
        next()
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(error())
    }
}

const updateTodo = async (req, res, next) => {
    const { title, body } = req.body
    const { id } = req.query
    try {
        await updateTodoService(id, title, body)
        res.sendStatus(204)
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(error())
    }
}

const deleteTodo = async (req, res, next) => {
    const { id } = req.query
    try {
        await deleteTodoService(id)
        res.sendStatus(204)
    } catch (e) {
        console.log(e.message)
        res.sendStatus(500) & next(error)
    }
}

module.exports = {
    fetchAllTodo,
    fetchTodo,
    addTodo,
    updateTodo,
    deleteTodo
}