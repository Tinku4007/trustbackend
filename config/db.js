const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing';

// const mongoDb = async () => {
//     try {
//         // await mongoose.connect(`mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing`);
//         // console.log("successfully connected");
//         try {
//             await mongoose.connect("mongodb+srv://tinkusaini1252:Tinku%4099@cluster0.dbsdk.mongodb.net/testing", {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true,
//                 serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds
//                 socketTimeoutMS: 45000,         // Keep alive for 45 seconds
//             });
//             console.log('Successfully connected to MongoDB');
//         } catch (error) {
//             console.error('Error connecting to MongoDB:', error.message);
//         }

//     }
//     catch (error) {
//         console.log(error);


//     }
// };

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      serverSelectionTimeoutMS: 20000,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error; // ⭐ IMPORTANT
  }
};

module.exports = mongoDb;
