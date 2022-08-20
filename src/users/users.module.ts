import { Module } from '@nestjs/common'
import { CommonModule } from 'src/common/common.module'
import { LoggerService } from 'src/common/logger.service'
import { TokenService } from 'src/common/token.service'
import { HealthCheckModule } from 'src/health-check/health-check.module'
import { RepositoriesModule } from 'src/repositories/repositories.module'
import { jwtService } from 'src/verify/jwt.service'
import { VerifyFactoryService } from 'src/verify/verify.factory.service'
import { VerifyModule } from 'src/verify/verify.module'
import { UsersController } from './users.controller'
import { UsersHandler } from './users.handler'
import { UsersService } from './users.service'

@Module({
  imports: [CommonModule, VerifyModule, RepositoriesModule],
  controllers: [UsersController],
  providers: [UsersHandler, LoggerService, UsersService, VerifyFactoryService, TokenService, jwtService],
})
export class UsersModule {}
