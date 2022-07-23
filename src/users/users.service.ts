import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common'
import { ServiceReturnParams } from 'utils/interface'
import { CreateUserDto, LoginUserDto } from './users.dto'
import * as uuid from 'uuid'
import { HelloLoggerService } from 'src/common/hello.logger.service'
import { EmailService } from 'src/identity-access/email.service'
import { ConfigService } from 'src/common/config.service'

@Injectable()
export class UsersService {
  @Inject(HelloLoggerService) private logger: HelloLoggerService
  @Inject(EmailService) private emailService: EmailService
  @Inject(ConfigService) private config: ConfigService

  async register(params: CreateUserDto): Promise<ServiceReturnParams<boolean>> {
    this.logger.log('register')
    const signUpVerifyToken = uuid.v1()

    await this.checkUser({ email: params.email })
    await this.saveUser(params, signUpVerifyToken)
    await this.sendMemberJoinEmail(params, signUpVerifyToken)

    return {
      isRegister: true,
      err: null,
    }
  }

  async login({ email, password }: LoginUserDto): Promise<ServiceReturnParams<null>> {
    this.logger.log('login')

    return null
  }

  async getUser(id: string): Promise<ServiceReturnParams<null>> {
    this.logger.log('get user')
    return null
  }

  /**
   * @todo DB
   */
  async emailVerify(token: string): Promise<ServiceReturnParams<null>> {
    return null
  }

  /**
   * @todo DB
   */
  private async checkUser(params: Pick<CreateUserDto, 'email'>) {
    this.logger.innerLog('check user')
    return null
  }

  /**
   * @todo DB
   */
  private async saveUser(params: CreateUserDto, token: string) {
    this.logger.innerLog('save user')
    return null
  }

  /**
   * @todo DB
   */
  private async sendMemberJoinEmail(params: Pick<CreateUserDto, 'email'>, token: string) {
    this.logger.innerLog('send member join email')
    return null
  }
}
