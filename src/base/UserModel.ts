import { alias, serializable, serialize } from 'serializr'
import { Serializeable } from 'utils/interface'

export class UserModel implements Serializeable {
  @serializable(alias('user_email')) userEmail: string
  @serializable(alias('user_password')) userPassword: string
  @serializable(alias('user_name')) userName: string

  constructor(data?: any) {
    if (data) {
      this.inject(data)
    }
  }
  toDict() {
    return serialize(this)
  }

  inject(data: any): this {
    this.userEmail = data['user_email']
    this.userPassword = data['user_password']
    this.userName = data['user_name']
    return this
  }
}
