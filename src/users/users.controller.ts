import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { Url } from 'utils/type'
import { LoginValidPipe, SingUpValidPipe } from './users.pipe'
import { UsersHandler } from './users.handler'

@Controller(Url.ROOT_USERS)
export class UsersController {
  @Inject(LoggerService) logger: LoggerService
  @Inject(UsersHandler) userHandler: UsersHandler

  @Post()
  async SignUp(@Body(SingUpValidPipe) params: User) {
    this.logger.info('users/signup')
    return await this.userHandler.signUp(params)
  }

  // @Post(Url.EMAIL_VERIFY)
  // async verify(@Query('signUpVerifyToken') token: string) {
  //   this.logger.info('users/email-verify')
  //   return this.userHandler.emailVerify(token)
  // }

  @Post(Url.LOGIN)
  async login(@Body(LoginValidPipe) params: User) {
    this.logger.info('users/login')
    return this.userHandler.login(params)
  }

  @Get(Url._ID)
  async getUser(@Param('id') userId: string) {
    this.logger.info('users/getUser')
    return this.userHandler.getUser(userId)
  }
}
