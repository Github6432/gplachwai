const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectDB();