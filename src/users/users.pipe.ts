import { ArgumentMetadata, Injectable } from '@nestjs/common'
import { User, VerifyToken } from 'base/model'
import { ValidationParamsPipe } from 'utils/class'
import { LoginSchema, SignUpSchema, VerifyPaySchema } from './users.dto'

@Injectable()
export class SingUpValidPipe extends ValidationParamsPipe {
  override transform(value: any, metadata: ArgumentMetadata) {
    return this.validate(value, SignUpSchema, new User())
  }
}

@Injectable()
export class LoginValidPipe extends ValidationParamsPipe {
  override transform(value: any, metadata: ArgumentMetadata) {
    return this.validate(value, LoginSchema, new VerifyToken())
  }
}

@Injectable()
export class VerifyValidPipe extends ValidationParamsPipe {
  override transform(value: any, metadata: ArgumentMetadata) {
    return this.validate(value, VerifyPaySchema, new User())
  }
}
