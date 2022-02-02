const mongoose = require('mongoose') 
const colors = require('colors')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true
        })
        console.log(`MongoDB Connection is` + ' Healthy'.green + ` and Running on: ` + `${conn.connection.host}`.blue)
    } catch (error){
        console.error(`No connection was established. Error: ` + `${error.message}`.red)
        process.exit(1);
    }
}   

module.exports = connectDB