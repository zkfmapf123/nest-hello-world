import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { TokenService } from 'src/common/token.service'
import { pass, Try } from 'ts-dkutil'
import { Service } from 'utils/interface'
import { UserRepository } from './user.repository'

@Injectable()
export class UsersService implements Service<User> {
  private context = 'userSerivce'

  @Inject(LoggerService) logger: LoggerService
  @Inject(UserRepository) userRepository: UserRepository
  @Inject(TokenService) tokenService: TokenService

  async getUserId(params: User): Promise<Try<Error, number>> {
    this.logger.info(`${this.context} getUserId : ${params.userEmail}`)

    try {
      const users = await this.userRepository.findOne('email', params.userEmail)
      return pass(users?.id)
    } catch (e) {
      this.logger.error(e)
      return fail(e)
    }
  }

  async create(params: User): Promise<Try<Error, void>> {
    this.logger.info(`${this.context} update`)

    try {
      await this.userRepository.create(params)
      return pass(null)
    } catch (e) {
      this.logger.error(e)
      return fail(e)
    }
  }
}
