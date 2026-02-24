const RegisterModel = require("./model/user.model")
const jwt = require("jsonwebtoken")

const LoginValidation = require("./Validation/LoginValidation")


const LoginControl = async (req, res, next) => {
    console.log("server is running")
    const LoginData = await LoginValidation.validateAsync(req.body)
    console.log("success database", LoginData)

    const { username, password } = LoginData
    console.log(username, password)
    const registerDataCheck = await RegisterModel.find({ username })


    if (!registerDataCheck) {
        return res.status(400).json({ status: " user already does not exists" })
    }

    const jwtToken = jwt.sign({ username: username }, "simran", { expiresIn: "1h" });

    res.cookie("jwtToken", jwtToken, {
        maxAge: 3600,
        httpOnly: true

    })

    res.status(200).json({
        message: "user Login successfully",
        jwtToken: jwtToken
    }

    )
    next()
}

module.exports = LoginControl