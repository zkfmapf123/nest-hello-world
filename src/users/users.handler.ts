import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { jwtService } from 'src/verify/jwt.service'
import { VerifyFactoryService } from 'src/verify/verify.factory.service'
import { asyncVoidPipe, pass, Try } from 'ts-dkutil'
import { FailType, VerifyType } from 'utils/type'
import { UsersService } from './users.service'

@Injectable()
export class UsersHandler {
  private context = 'UserHandler'
  @Inject(LoggerService) logger: LoggerService
  @Inject(UsersService) userService: UsersService
  @Inject(VerifyFactoryService) verifyService: VerifyFactoryService
  @Inject(jwtService) jwtService: jwtService

  async signUp(params: User): Promise<Try<Error, string>> {
    this.logger.info(`${this.context} signUp`)
    const tryResult = await this.userService.getUsers('email', params.email)
    /**
     * error
     */
    if (tryResult._tag === 'fail') return tryResult

    /**
     * not exist user
     */
    if (tryResult._tag === 'pass' && tryResult.result) {
      return {
        _tag: 'pass',
        result: FailType.ALREADY_EXISTS_USER,
        error: null,
      }
    }

    return (await asyncVoidPipe(
      // async () => this.verifyService.sendVerify(VerifyType.GMAIL, params),
      async () => this.userService.create(params),
    )) as unknown as Try<Error, string>
  }

  async login(params: User): Promise<Try<Error, string>> {
    this.logger.info(`${this.context} login`)
    const isLogin = await this.userService.login(params)

    if (!isLogin.result) {
      return fail(null)
    }

    const token = this.jwtService.createToken(params)
    return pass(token)
  }

  async getUser(userId: string) {
    this.logger.info(`${this.context} getUser`)
    return await this.userService.getUsers('id', userId)
  }
}
