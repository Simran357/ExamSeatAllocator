const Joi = require('joi');

const LoginValidation =  Joi.object({
  email: Joi.string().email().required()
   ,
  password: Joi.string()
    .min(6)
   

  

});



module.exports = LoginValidation