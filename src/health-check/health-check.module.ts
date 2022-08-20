import { Module } from '@nestjs/common'
import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus'
import { HealthCheckController } from './health-check.controller'

@Module({
  imports: [HealthCheckService, HttpHealthIndicator],
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
