import { ArgumentMetadata, Injectable } from '@nestjs/common'
import { UserModel } from 'src/base/UserModel'
import { CreateUserSchema } from 'src/users/user.dto'
import { ValidationParamsPipe } from 'utils/class'

/**
 * make instance by request
 */
@Injectable()
export class RegisterParamsPipe extends ValidationParamsPipe {
  override transform(value: any, metadata: ArgumentMetadata) {
    const params = this.getSerializeParams(value, CreateUserSchema, new UserModel())
    return params
  }
}
