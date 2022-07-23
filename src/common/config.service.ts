const chalk = require('chalk')
import { Injectable, Scope } from '@nestjs/common'
import { EnvType } from 'utils/type'

/**
 * @reference
 * https://wikidocs.net/150160
 */
@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  private env: EnvType

  constructor() {
    this.env = (process.env.NODE_ENV as EnvType | undefined) ?? EnvType.DEV
    console.log(chalk.blue(this.env))
  }

  getDatabaseConfig() {}
}
