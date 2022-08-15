import { Global, Module } from '@nestjs/common'
import { LoggerService } from './logger.service'
import { TokenService } from './token.service'

@Global()
@Module({
  providers: [LoggerService, TokenService],
  exports: [LoggerService, TokenService],
})
export class CommonModule {}
