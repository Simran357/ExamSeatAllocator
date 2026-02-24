const router = require("express").Router()

const register = require('./registerTeam.route')

router.use("/register",register)
module.exports = router;