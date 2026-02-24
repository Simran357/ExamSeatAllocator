const Joi = require('joi');

const LoginValidation =  Joi.object({
  username: Joi.string()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .min(6)
    .required(),
 confirmpassword: Joi.string()
    .min(6)
    .required(),

});



module.exports = LoginValidation