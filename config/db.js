const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing';

const mongoDb = async () => {
    try {
        await mongoose.connect(`mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing`);
        // await  mongoose.connect("mongodb+srv://admin:admin@cluster0.xrh1grn.mongodb.net/Avatarlocals?retryWrites=true&w=majority&appName=Cluster0");
        console.log("successfully connected");

    }
    catch (error) {
        console.log(error);


    }
    // try {
    //     await mongoose.connect(mongoUrl, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true
    //     });
    //     console.log('Connected to MongoDB');
    // } catch (error) {
    //     console.error('Error connecting to MongoDB:', error.message);
    // }
};

module.exports = mongoDb;
