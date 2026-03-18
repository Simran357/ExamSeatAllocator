const RegisterModel = require("./model/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const LoginValidation = require("./Validation/LoginValidation")


const LoginControl = async (req, res, next) => {
    console.log("Request body:", req.body)
    console.log("server is running")
    try {
        const LoginData = await LoginValidation.validateAsync(req.body)
        console.log(" login database", LoginData)

        const { email, password } = LoginData
        console.log(email, password)
        console.log("Password from frontend:", password)

        const loginDataCheck = await RegisterModel.findOne({ email:email })

        console.log("loginDataCheck",loginDataCheck)
        if (!loginDataCheck) {
            return res.status(400).json({ status: false, message: " user already does not exists,please register first" })
        }

        const isPasswordMatch = await bcrypt.compare(password, loginDataCheck.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }
        const userPayload = {
            userId: loginDataCheck._id,
            userRole :loginDataCheck.role
        }
        const jwtToken = jwt.sign({ user: userPayload }, "simran", { expiresIn: "1h" });

        res.cookie("jwtToken", jwtToken, {
maxAge: 3600000,
            httpOnly: true

        })

        res.status(200).json({
            status: true,
            message: "user Login successfully",
          user :userPayload

        }

        )
    } catch (error) {
        next(error);
        console.log("Error in registration:", error);
    }
}


module.exports = LoginControl