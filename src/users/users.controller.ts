import { Body, Controller, Get, Inject, Param, Post, Query } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { Url } from 'utils/type'
import { LoginValidPipe, SingUpValidPipe } from './users.pipe'
import { UsersService } from './users.service'

@Controller(Url.ROOT_USERS)
export class UsersController {
  @Inject(LoggerService) logger: LoggerService
  @Inject(UsersService) userService: UsersService

  @Post()
  async SignUp(@Body(SingUpValidPipe) params: User) {
    this.logger.info('users/signup')
    const result = this.userService.signUp(params)
  }

  @Post(Url.EMAIL_VERIFY)
  async verify(@Query('signUpVerifyToken') token: string) {
    this.logger.info('users/email-verify')
    const result = this.userService.emailVerify(token)
  }

  @Post(Url.LOGIN)
  async login(@Body(LoginValidPipe) params: User) {
    this.logger.info('users/login')
    const result = this.userService.login(params)
  }

  @Get(Url._ID)
  async getUser(@Param('id') userId: string) {
    this.logger.info('users/getUser')
    const result = this.userService.getUser(userId)
  }
}
