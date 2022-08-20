import { Body, Controller, Get, Headers, Inject, Param, Post, Query, UseGuards } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { Url } from 'utils/type'
import { LoginValidPipe, SingUpValidPipe } from './users.pipe'
import { UsersHandler } from './users.handler'
import { AuthGuard } from 'src/guard/auth.guard'

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
  // return this.userHandler.emailVerify(token)
  // }

  @Post(Url.LOGIN)
  async login(@Body(LoginValidPipe) params: User) {
    this.logger.info('users/login')
    return await this.userHandler.login(params)
  }

  /**
   * @desc
   * use bearer token
   */
  @UseGuards(AuthGuard)
  @Get(Url._ID)
  async getUser(@Headers() headers: any) {
    this.logger.info('users/getUser')
    console.log(headers)
    // return this.userHandler.getUser(userId)
  }
}
