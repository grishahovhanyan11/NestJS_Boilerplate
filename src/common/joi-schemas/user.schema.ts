import * as Joi from 'joi'
import { RoleEnum } from '../enums/role.enum'

const registerUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(12).required(),
  confirmPassword: Joi.ref('password'),
  role: Joi.string().valid(RoleEnum.User, RoleEnum.Admin).required()
}).options({ abortEarly: false })

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(12).required()
}).options({ abortEarly: false })

export { registerUserSchema, loginUserSchema }
