import * as Joi from 'joi'

type UserDto = {
  user_email: string
  user_password: string
  user_name: string
  email_token: string
}

type CreateUserDto = Pick<UserDto, 'user_email' | 'user_name' | 'user_password'>
type LoginUserDto = Pick<UserDto, 'user_email' | 'user_password'>
type EmailTokenDto = Pick<UserDto, 'email_token'>

export const CreateUserSchema = Joi.object<CreateUserDto>({
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
  user_name: Joi.string().required(),
})

export const LoginUserSchema = Joi.object<LoginUserDto>({
  user_email: Joi.string().required(),
  user_password: Joi.string().required(),
})

export const EmailTokenSchema = Joi.object<EmailTokenDto>({
  email_token: Joi.string().required(),
})
