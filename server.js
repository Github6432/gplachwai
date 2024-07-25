const express = require('express');
require('colors');
const dotenv = require('dotenv');

//configure env
dotenv.config();

//rest object
const app = express();

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