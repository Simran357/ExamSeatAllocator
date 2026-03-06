const router = require("express").Router()
const googleLogin = require("../../Controllers/GoogleLogin");
const LoginControl = require("../../Controllers/LoginController");
const registercontrol = require("../../Controllers/RegisterController");


router.post("/registercontrol",registercontrol)
router.post("/auth/googleLogin",googleLogin)
router.post("/LoginControl",LoginControl)

module.exports = router


