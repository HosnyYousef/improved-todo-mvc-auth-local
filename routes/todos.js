const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
require('dotenv').config({path: './config/.env'})

//Enable SMS reminders if Twilio acount info is available
if (process.env.TWILIO_ACCOUNT_SID) {
    const enableReminders = require('../controllers/reminder')
} else {
    console.log('Reminders disabled--see README for info on how to enable them')
} 

router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router