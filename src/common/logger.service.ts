import { Injectable, Logger } from '@nestjs/common'
import { LogType } from 'utils/type'

interface ConsoleParams {
  msg: string
  data: any
  logType: LogType
}

@Injectable()
export class LoggerService {
  debug(msg: string, data?: any) {
    this.console({ msg, data, logType: LogType.DEBUG })
  }

  info(msg: string, data?: any) {
    this.console({ msg, data, logType: LogType.INFO })
  }

  error(msg: string, data?: any) {
    this.console({ msg, data, logType: LogType.ERROR })
  }

  private console(params: ConsoleParams) {
    Logger[params.logType](`${params.msg}\n ${params?.data ? JSON.stringify(params.data) : ''}`)
  }
}
