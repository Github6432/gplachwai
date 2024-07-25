const express = require('express');
require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

//configure env
dotenv.config();

//database config
connectDB();


//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/v1/auth', require('./routes/authRoute'));

//rest api
app.get('/', (req, res) => {
    res.send('<h1>Welcome To GP-LACHWAI</h1>');
});

//PORT
const PORT = process.env.PORT || 8080;


//RUN LISTEN
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT} & Link: http://localhost:${PORT}`.bgMagenta);
})