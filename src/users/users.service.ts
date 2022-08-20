import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'
import { TokenService } from 'src/common/token.service'
import { UserEntity } from 'src/entity/user.entity'
import { UserRepository } from 'src/repositories/users.repository'
import { pass, Try } from 'ts-dkutil'
import { Service } from 'utils/interface'

@Injectable()
export class UsersService implements Service<User> {
  private context = 'userSerivce'

  @Inject(LoggerService) logger: LoggerService
  @Inject(UserRepository) userRepository: UserRepository
  @Inject(TokenService) tokenService: TokenService

  async getUsers(property: keyof UserEntity, value: any): Promise<Try<Error, UserEntity>> {
    this.logger.info(`${this.context} getUsers`)

    try {
      const users = await this.userRepository.findOne(property, value)
      return pass(users)
    } catch (e) {
      this.logger.error(e)
      return fail(e)
    }
  }

  async create(params: User): Promise<Try<Error, void>> {
    this.logger.info(`${this.context} update`)

    try {
      await this.userRepository.transactionCreate(params)
      return pass(null)
    } catch (e) {
      this.logger.error(e)
      return fail(e)
    }
  }

  async login(params: User): Promise<Try<Error, boolean>> {
    this.logger.info(`${this.context}`)

    try {
      const users = await this.userRepository.findOne('email', params.email)

      if (!users) {
        throw new Error('not exist user')
      }

      const { email, password } = users
      const { email: _email, password: _password } = params

      if (email === _email && password === _password) {
        return pass(true)
      }
    } catch (e) {
      this.logger.error(e)
      return fail(e)
    }
  }
}
