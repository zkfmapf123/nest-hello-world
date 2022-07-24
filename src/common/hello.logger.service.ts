import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common'

@Injectable()
export class HelloLoggerService {
  error(msg: any) {
    Logger.error(JSON.stringify(msg))
  }

  log(msg: any) {
    Logger.log(JSON.stringify(msg))
  }

  innerLog(msg: any) {
    Logger.log('\t > '.concat(`${JSON.stringify(msg)}`))
  }

  debug(msg: any) {
    Logger.debug(JSON.stringify(msg))
  }
}
