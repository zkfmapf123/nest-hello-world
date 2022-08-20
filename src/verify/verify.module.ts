import { Module } from '@nestjs/common'
import { jwtService } from './jwt.service'
import { VerifyFactoryService } from './verify.factory.service'

@Module({
  providers: [VerifyFactoryService, jwtService],
})
export class VerifyModule {}
