const RegisterModel = require("./model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const LoginValidation = require("./Validation/LoginValidation")


const LoginControl = async (req, res, next) => {
    console.log("server is running")
     try {
    const LoginData = await LoginValidation.validateAsync(req.body)
    console.log(" login database", LoginData)

    const { email,password,username } = LoginData
    console.log(email, password)
    const loginDataCheck = await RegisterModel.findOne({email })

console.log(loginDataCheck)
    if (!loginDataCheck) {
        return res.status(400).json({ status:false, message: " user already does not exists,please register first" })
    }

  const isPasswordMatch = await bcrypt.compare(password, loginDataCheck.password);

if (!isPasswordMatch) {
  return res.status(400).json({ message: "Invalid Password" });
}
    const userPayload = {
   userId: loginDataCheck._id,
  email: email,
  username:username,
  password: password,
    }
    const jwtToken = jwt.sign({ user : userPayload }, "simran", { expiresIn: "1h" });

    res.cookie("jwtToken", jwtToken, {
        maxAge: 3600,
        httpOnly: true

    })

    res.status(200).json({
        status:true,
        message: "user Login successfully",
        jwtToken: jwtToken
    }

    )
 } catch (error) {
  next(error);
  console.log("Error in registration:", error);
 }
}


module.exports = LoginControl