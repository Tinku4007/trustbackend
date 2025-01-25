const express = require("express")
const cors = require("cors")
const mongoDb = require("./config/db")
const router = require("./router/router")

const app = express()
app.use(express.json())
app.use(cors())
mongoDb()

app.use('/api', router);
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});