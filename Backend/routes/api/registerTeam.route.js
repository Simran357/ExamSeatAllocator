const router = require("express").Router()
const LoginControl = require("../../Controllers/LoginController");
const registercontrol = require("../../Controllers/RegisterController");



router.post("/registercontrol",registercontrol)
router.post("/LoginControl",LoginControl)

module.exports = router


