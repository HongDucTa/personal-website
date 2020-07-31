const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todo')

router.get('/fetchAll', todoControllers.fetchAllTodo);

router.get('/fetch/', todoControllers.fetchTodo);

router.post('/add', todoControllers.addTodo)

router.put('/update/', todoControllers.updateTodo)

router.delete('/delete/', todoControllers.deleteTodo)

module.exports = router;