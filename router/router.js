const express = require("express")
const {keyController,keyGetController ,keyDeleteController} = require("../controller/Key")
const router = express.Router()

router.post("/key", keyController)
router.get("/get/key" , keyGetController)
router.delete("/key/delete/:id", keyDeleteController);

module.exports = router