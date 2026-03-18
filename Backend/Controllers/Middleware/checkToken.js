const jwt = require("jsonwebtoken")

const CheckToken =(req,res,next)=>{
    console.log("chcektoken:", req.cookies.jwtToken)
    try{    const jwtToken =  req.cookies.jwtToken

    if(!jwtToken){
        res.status(401).json({
            success:false,
            message:"unauthorized access , token is not present "})
    }

    const verifyToken = jwt.verify(jwtToken,"simran")
      next()


}catch(err){
    next(err)

}

}

export default CheckToken