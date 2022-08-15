import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import { pipe } from 'fp-ts/lib/function'
import { tryCatch } from 'fp-ts/lib/TaskEither'
import { async } from 'rxjs'
import { LoggerService } from 'src/common/logger.service'
import { VerifyFactoryService } from 'src/verify/verify.factory.service'
import { asyncVoidPipe, Try } from 'ts-dkutil'
import { FailType, VerifyType } from 'utils/type'
import { UsersService } from './users.service'

@Injectable()
export class UsersHandler {
  private context = 'UserHandler'
  @Inject(LoggerService) logger: LoggerService
  @Inject(UsersService) userService: UsersService
  @Inject(VerifyFactoryService) verifyService: VerifyFactoryService

  async signUp(params: User): Promise<Try<Error, string>> {
    this.logger.info(`${this.context} signUp`)
    const tryResult = await this.userService.getUserId(params)
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

    const result = (await asyncVoidPipe(
      async () => this.userService.create(params),
      async () => this.verifyService.sendVerify(VerifyType.GMAIL, params),
    )) as unknown as Try<Error, string>

    return result
  }

  // emailVerify(token: string) {
  //   this.logger.info(`${this.context} emailVerify token : ${token}`)
  // }

  login({ userEmail, userPassword }: User) {
    this.logger.info(`${this.context} login`)
  }

  getUser(userId: string) {
    this.logger.info(`${this.context} getUser`)
  }
}
