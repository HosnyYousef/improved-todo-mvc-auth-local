const mongoose = require('mongoose')

const connectDB = async () => {
  try {
<<<<<<< HEAD
    //Added with auth: useCreateIndex`
=======
>>>>>>> 5e056b3 (yousef's HTML and CSS work)
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
<<<<<<< HEAD
    //Log error
    console.error(err)
    //Exit program if error
    process.exit(1)
  }
}
//Export function as a module
=======
    console.error(err)
    process.exit(1)
  }
}

>>>>>>> 5e056b3 (yousef's HTML and CSS work)
module.exports = connectDB
