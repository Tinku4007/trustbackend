const express = require("express");
const cors = require("cors");
const mongoDb = require("./config/db");
const router = require("./router/router");

const app = express();
app.use(express.json());

// CORS configuration to allow all origins
app.use(cors({
    origin: "*", // Allow all origins (make sure this is what you want)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods including OPTIONS
    credentials: true, // Allow credentials like cookies or authorization headers (if needed)
}));

mongoDb();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>"); // Send HTML response
});

app.use('/api', router);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
