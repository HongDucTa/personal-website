const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    title: String,
    body: String,
    date: Date,
    lastUpdate: Date
})

module.exports = Todo