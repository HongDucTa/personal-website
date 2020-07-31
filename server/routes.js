const todo = require('./routes/todo')

module.exports = (app) => {
    app.use('/todo', todo)
}