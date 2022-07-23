import { Module } from '@nestjs/common'
import { CommonModule } from 'src/common/common.module'
import { ConfigService } from 'src/common/config.service'
import { HelloLoggerService } from 'src/common/hello.logger.service'
import { IdentityAccessModule } from 'src/identity-access/identity-access.module'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  imports: [CommonModule, IdentityAccessModule],
  controllers: [UsersController],
  providers: [UsersService, HelloLoggerService, ConfigService],
})
export class UsersModule {}
