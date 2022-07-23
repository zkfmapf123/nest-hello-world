import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common'

@Injectable()
export class HelloLoggerService {
  error(msg: string) {
    Logger.error(msg)
  }

  log(msg: string) {
    Logger.log(msg)
  }

  innerLog(msg: string) {
    Logger.log('\t > '.concat(`${msg}`))
  }

  debug(msg: string) {
    Logger.debug(msg)
  }
}
