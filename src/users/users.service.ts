import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import { LoggerService } from 'src/common/logger.service'

@Injectable()
export class UsersService {
  @Inject(LoggerService) loggerService: LoggerService

  signUp({ userName, userEmail, userPassword }: User) {}

  emailVerify(token: string) {}

  login({ userEmail, userPassword }: User) {}

  getUser(userId: string) {}
}
