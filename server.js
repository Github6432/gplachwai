const express = require('express');
const cors = require('cors');
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
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.use('/api/users/', require('./routes/authRoute'));
app.use('/api/users/', require('./routes/userRoute'));
app.use('/api/users/', require('./routes/listRoute'));

//rest api
app.get('/', (req, res) => {
    res.send('<h1>Welcome To GP-LACHWAI</h1>');
});

//PORT
const PORT = process.env.PORT || 5010;


//RUN LISTEN
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT} & Link: http://localhost:${PORT}`.bgMagenta);
})