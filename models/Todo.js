const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
<<<<<<< HEAD
  },
  dueDate: {
    type: Date,
    required: false
  },
  dayAdd:{
    type: Date,
    required: false
  },
  interval:{
    type: String,
    required: false,
  },
  reminders: {
    type: Boolean
  }
})
  

module.exports = mongoose.model('Todo', TodoSchema, 'Users_Todo')

=======
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
>>>>>>> 5e056b3 (yousef's HTML and CSS work)
