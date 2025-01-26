const express = require("express")
const {keyController,keyGetController} = require("../controller/Key")
const router = express.Router()

router.post("/key", keyController)
router.get("/get/key" , keyGetController)

module.exports = router