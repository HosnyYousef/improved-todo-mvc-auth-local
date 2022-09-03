const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
<<<<<<< HEAD
const { ensureAuth, ensureGuest } = require('../middleware/auth')
=======
const { ensureAuth } = require('../middleware/auth')
>>>>>>> 5e056b3 (yousef's HTML and CSS work)

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router