const router = require("express").Router()
const googleLogin = require("../../Controllers/GoogleLogin");
const ImageController = require("../../Controllers/Imagecontrol");
const LoginControl = require("../../Controllers/LoginController");
const registercontrol = require("../../Controllers/RegisterController");


router.post("/registercontrol",registercontrol)
router.post("/auth/googleLogin",googleLogin)
router.post("/LoginControl",LoginControl)
router.post("/imagecontrol",ImageController)
module.exports = router


