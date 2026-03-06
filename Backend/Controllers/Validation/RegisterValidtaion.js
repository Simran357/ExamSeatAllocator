const Joi = require('joi');

const RegisterValidation = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6),
  confirmpassword: Joi.string().min(6),
});

module.exports = RegisterValidation;