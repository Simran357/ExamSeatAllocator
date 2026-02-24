const RegisterModel = require("./model/user.model")
const bcrypt = require("bcrypt")
const RegisterValidation = require("./Validation/RegisterValidtaion")


const registercontrol = async (req, res, next) => {
    console.log("server is running")
    const registerData = await RegisterValidation.validateAsync(req.body)
    console.log("success database", registerData)

    const { username, password ,confirmpassword} = registerData
    const registerDataCheck = await RegisterModel.findOne({
        username: username,
    })

    console.log("registerDataCheck :", registerDataCheck)
    if (registerDataCheck) {
        return res.status(400).json({ status: " user already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    const newUser = new RegisterModel({
        username: username,
        password: hashedPassword,
        confirmpassword:hashedPassword

    })


    await newUser.save()
    res.status(200).json({ message: "user registered successfully" })
    next()
}

module.exports = registercontrol