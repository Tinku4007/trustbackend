const express = require("express")
const keyController = require("../controller/Key")
const router = express.Router()
router.post("/key", keyController)

module.exports = router