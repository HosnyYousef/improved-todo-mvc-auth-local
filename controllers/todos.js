const humanizeDuration = require("humanize-duration");
const Todo = require('../models/Todo')



module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            const chage  =  await todoItems.forEach(n => n.interval = humanizeDuration(new Date(n.dueDate).getTime() - new Date().getTime()).split(",")[0])
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
            console.log(todoItems.interval)
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        console.log(new Date(req.body.dueDate).getTime())
        try{
            await Todo.create({
                todo: req.body.todoItem, 
                completed: false, 
                userId: req.user.id, 
                dueDate: req.body.dueDate,
                dayAdd: new Date(),
                reminders: Boolean(req.body.reminders)
            })
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}