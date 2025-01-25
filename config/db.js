const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const mongoUrl = 'mongodb://127.0.0.1:27017/test';


const mongoDb = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDb;