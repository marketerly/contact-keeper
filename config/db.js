const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Mongo DB connected in the Try function :D');
    } catch (error) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
