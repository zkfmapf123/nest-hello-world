import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommonModule } from 'src/common/common.module'
import { LoggerService } from 'src/common/logger.service'
import { TokenService } from 'src/common/token.service'
import { UserEntity } from 'src/entity/user.entity'
import { VerifyFactoryService } from 'src/verify/verify.factory.service'
import { VerifyModule } from 'src/verify/verify.module'
import { UserRepository } from './user.repository'
import { UsersController } from './users.controller'
import { UsersHandler } from './users.handler'
import { UsersService } from './users.service'

@Module({
  imports: [CommonModule, VerifyModule, TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersHandler, LoggerService, UsersService, VerifyFactoryService, UserRepository, TokenService],
})
export class UsersModule {}
