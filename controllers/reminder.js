//Controlls automated reminders. Sends SMS message once per day, if user has a phone number and enabled reminders

//Once per day, go through user DB and select those with reminders enabled. Count how many todos each user has. Then, send them a text saying "This is a reminder that you have {n} items to do today."

//On todo entry form => if user checks 'reminder' for a task, open a menu for them to choose a date/time. 
//For now, send alert at 7AM on the due date.
const Todo = require('../models/Todo')
const Users = require('../models/User')
const cron = require('node-cron')
const SMS = require('./sms')



// Schedule tasks to be run on the server.
function setReminder() {
    
    cron.schedule('* * * * *', () => {
        console.log('running a task every minute');
      });
}
setReminder()
function cancelReminder() {

}

//Gets list of users who have reminders enabled
findUsersWithReminders = async () => {
    try {
        const userList = await Users.find({ reminders: true })
        // console.log(userList)
        return userList
    } catch(err) {
        console.log(err)
        return []
    }
}

//Get list of tasks due today for a specified user
findTasksDue = async (user) => {
    // console.log(`Find tasks due for ${user}`)
    const todoItems = await Todo.find({userId: user})
    // console.log(todoItems)
}


getReminders = async () => {
    try {
        const usersToRemind = await findUsersWithReminders()
        // console.log(usersToRemind)
        // console.log('**********')
        let tasks = []
        for (let user in usersToRemind) {
            // console.log(user)
            // console.log(`Find tasks for ${usersToRemind[user]._id}`)
            tasks[user] = await findTasksDue(usersToRemind[user]._id)
        }
        //isItDueToday(tasks[0])
        console.log(tasks[0])
    } catch (error) {
        console.log(error)
    }
}

getReminders()


isItDueToday = (dueDate) => {
    let today = new Date()
    console.log(today.getDate())
    console.log('TODAY!!!')
}


// SMS.sendSMS('Hello world!')

// module.exports = {
//     setReminder: {
//         cron.schedule('* * * * *', () => {
//             console.log('running a task every two minutes');
//           });
//     },
//     cancelReminder: {

//     }

// }