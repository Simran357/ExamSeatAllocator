const jwt = require("jsonwebtoken")

const CheckToken =(req,res,next)=>{
    try{
    const jwtToken = req.headers.authorization?.split("")[1]
    if(!jwtToken){
        res.status(4001).json({
            success:false,
            message:"unauthorized access , token is not present "})
    }

    const verifyToken = jwt.verify(jwtToken,"simran")
    return verifyToken

}catch{(err)=>{next(err)}}

}

export default CheckToken