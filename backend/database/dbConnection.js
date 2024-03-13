const mongoose = require('mongoose')

const connectToDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL)
    console.log(`mongodb connected at ${connect.connection.port}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectToDb