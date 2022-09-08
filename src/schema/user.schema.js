const Joi = require("joi");

const signUpSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
})

const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required().min(6),
})

module.exports = {
    signUpSchema,
    loginSchema
};