const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const connectDB = require('./config/db.js') 

const app = express()

// Environment Variables
dotenv.config({ path: './config/config.env'});

const PORT = process.env.PORT 
const MODE = process.env.NODE_ENV

// DB connection 
connectDB()

// Middleware
app.use(express.json())   //replacement for body-parser

// Logger   
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => {
    res.send('Climbing App')
})

app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/routes', require('./routes/climbing_routes'));
app.use('/api/v1/teams', require('./routes/teams'));
app.use('/api/v1/auth', require('./routes/auth'));

// Server
const server = app.listen(PORT, ()=>{
    console.log(`Server running in ${MODE} mode on port ${PORT}`.magenta.bold)
});