import { ArgumentMetadata, PipeTransform } from '@nestjs/common'
import { ObjectSchema } from 'joi'
import { serialize } from 'serializr'
import { HelloLoggerService } from 'src/common/hello.logger.service'
import { Serializeable } from './interface'

export class ValidationParamsPipe implements PipeTransform {
  protected logger: HelloLoggerService = new HelloLoggerService()

  transform(value: any, metadata: ArgumentMetadata) {
    throw new Error('must be override')
  }

  getSerializeParams(value: any, schema: ObjectSchema, model: Serializeable) {
    const { error, value: valdiateParams } = schema.validate(value)

    if (error) {
      this.logger.error(error.details)
      throw new Error('check required arguments')
    }

    return model.inject(valdiateParams)
  }
}
