import { Module } from '@nestjs/common'
import { CommonModule } from 'src/common/common.module'
import { LoggerService } from 'src/common/logger.service'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
  imports: [CommonModule],
  controllers: [UsersController],
  exports: [],
  providers: [UsersService, LoggerService],
})
export class UsersModule {}
