import { Module } from '@nestjs/common'
import { VerifyFactoryService } from './verify.factory.service'

@Module({
  providers: [VerifyFactoryService],
})
export class VerifyModule {}
