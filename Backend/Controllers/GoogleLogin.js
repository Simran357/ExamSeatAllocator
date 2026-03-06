const axios = require("axios")
const RegisterModel = require("./model/user.model")
const jwt = require("jsonwebtoken")
const googleLogin = async (req,res,next)=>{
   try{
   const {accessToken} = req.body

   const googleApiRes = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
         headers:{
            Authorization:`Bearer ${accessToken}`
         }
      }
   )

   const {name,email,picture} = googleApiRes.data

   let user = await RegisterModel.findOne({email})

   if(!user){
      user = await RegisterModel.create({
         username:name,
         email,
         avatar:picture,
         provider:"google"
      })
   }

   const jwtToken = jwt.sign({userId:user._id}, "simran",{expiresIn: "1h"})

   res.cookie("jwtToken", jwtToken,{
      maxAge:3600000,
      httpOnly:true
   })
   res.status(200).json({
      status:true,
      message:"Google login successful",
      jwtToken
   })

   }catch(error){
      console.log(error)
      res.status(500).json({message:"Google login failed"})
   }
}

module.exports = googleLogin