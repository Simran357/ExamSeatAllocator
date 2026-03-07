const RegisterModel = require("./model/user.model")
const bcrypt = require("bcrypt")
const RegisterValidation = require("./Validation/RegisterValidtaion")


const registercontrol = async (req, res, next) => {
    console.log("server is running")
    try{
    const registerData = await RegisterValidation.validateAsync(req.body)
    console.log("success database", registerData)

    const { username, password ,email} = registerData
    const registerDataCheck = await RegisterModel.findOne({
        email: email,
    })

    console.log("registerDataCheck :", registerDataCheck)
    if (registerDataCheck) {
        return res.status(400).json({status:false, message: " user already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    const newUser = new RegisterModel({
        email:email,
        username: username,
        password: hashedPassword,
        provider: "myLocalUser",
    })


    await newUser.save()
    res.status(200).json({ status:true, message: "user registered successfully" })
}catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
}

module.exports = registercontrol