import { Module } from '@nestjs/common'
import { ConfigService } from './config.service'
import { HelloLoggerService } from './hello.logger.service'

@Module({
  providers: [HelloLoggerService, ConfigService],
  exports: [HelloLoggerService, ConfigService],
})
export class CommonModule {}
