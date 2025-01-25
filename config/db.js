const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing';

const mongoDb = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = mongoDb;
