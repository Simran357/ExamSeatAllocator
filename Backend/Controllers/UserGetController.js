const RegisterModel = require("./model/user.model")
const bcrypt = require("bcrypt")



const registercontrol = async (req,res,next)=>{

res.json({status:"success"})
console.log(username,password)
const registerDataCheck = await RegisterModel.find()


if(!registerDataCheck){
    return res.status(400).json({status:" No user exists in db"})
}

res.status(200).json({status:"user registered successfully",

})
next(error?.response)
}

module.exports = registercontrol