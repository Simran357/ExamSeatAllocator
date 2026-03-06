const Joi = require('joi');

const LoginValidation =  Joi.object({
  email: Joi.string().email().required()
   ,
   username:Joi.string().min(6).max(30),

  password: Joi.string()
    .min(6)
   ,
 confirmpassword: Joi.string()
    .min(6)
  

});



module.exports = LoginValidation