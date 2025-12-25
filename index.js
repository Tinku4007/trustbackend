const express = require("express");
const cors = require("cors");
const mongoDb = require("./config/db");
const router = require("./router/router");

const app = express();
app.use(express.json());
// mongoDb();


app.use(cors({
    origin: "*", // Allow all origins (for testing or general use)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow credentials (cookies)
}));


app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>"); // Send HTML response
});

app.use('/api', router);


// const PORT = 8000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const startServer = async () => {
  try {
    await mongoDb();

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("❌ Server not started (DB error)");
  }
};

startServer()