import * as Joi from 'joi'

export interface SingUpParams {
  user_name: string
  user_email: string
  user_password: string
}

export interface VerfiyParams {
  sign_up_verify_token: string
}

export interface LoginParams {
  user_email: string
  user_password: string
}

export const SignUpSchema = Joi.object<SingUpParams>({
  user_name: Joi.string().required(),
  user_email: Joi.string().min(3).required().email(),
  user_password: Joi.string().min(5).required(),
})

export const VerifyPaySchema = Joi.object<VerfiyParams>({
  sign_up_verify_token: Joi.string().min(10).required(),
})

export const LoginSchema = Joi.object<LoginParams>({
  user_email: Joi.string().required().email(),
  user_password: Joi.string().min(5).required(),
})
