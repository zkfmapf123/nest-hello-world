import { Controller, Get } from '@nestjs/common'
import { HealthCheck, HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus'

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly health: HealthCheckService, private readonly http: HttpHealthIndicator) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      //   () => this.http.pingCheck('nestjs-docs', 'htts://docs.nestjs.com'),
      () => this.http.pingCheck('api-check', 'http://localhost:3000'),
      () => this.http.pingCheck('db-check', 'http://localhost:3306'),
    ])
  }
}
