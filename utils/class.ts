import { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { ObjectSchema, override } from 'joi'
import { LoggerService } from 'src/common/logger.service'
import { Serializeable } from './interface'

export class ValidationParamsPipe implements PipeTransform {
  private readonly logger: LoggerService = new LoggerService()

  transform(value: any, metadata: ArgumentMetadata) {
    throw new Error('must be override')
  }

  validate(value: any, schema: ObjectSchema, model: Serializeable) {
    const { error, value: valdiateParams } = schema.validate(value)
    this.logger.info('params : ', valdiateParams)

    if (error) {
      this.logger.error('validation Error', error)
      throw new Error('check required arguments')
    }

    return model.inject(valdiateParams)
  }
}
