import * as Joi from 'joi'

export interface SingUpParams {
  name: string
  email: string
  password: string
}

export interface VerfiyParams {
  sign_up_verify_token: string
}

export interface LoginParams {
  email: string
  password: string
}

export const SignUpSchema = Joi.object<SingUpParams>({
  name: Joi.string().required(),
  email: Joi.string().min(3).required().email(),
  password: Joi.string().min(5).required(),
})

export const VerifyPaySchema = Joi.object<VerfiyParams>({
  sign_up_verify_token: Joi.string().min(10).required(),
})

export const LoginSchema = Joi.object<LoginParams>({
  email: Joi.string().required().email(),
  password: Joi.string().min(5).required(),
})
