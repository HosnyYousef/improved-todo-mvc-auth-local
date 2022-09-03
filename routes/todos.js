const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const reminderController = require('../controllers/reminder')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

//Uncomment when done!
//router.post('/setReminder', reminderController.setReminder)

module.exports = router