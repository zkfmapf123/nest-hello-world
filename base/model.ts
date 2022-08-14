import { alias, serializable, serialize as sz } from 'serializr'
import { Serializeable } from 'utils/interface'

export class User implements Serializeable {
  @serializable(alias('user_email')) userEmail: string
  @serializable(alias('user_password')) userPassword: string
  @serializable(alias('user_name')) userName: string

  constructor(data = {}) {
    this.inject(data)
  }

  toDict() {
    return sz(this)
  }

  inject(data: any): this {
    this.userEmail = data['user_email']
    this.userPassword = data['user_password']
    this.userName = data['user_name']
    return this
  }
}

export class VerifyToken implements Serializeable {
  @serializable(alias('sign_up_verify_token')) signUpVerifyToken: string

  constructor(data = {}) {
    this.inject(data)
  }

  toDict() {
    return sz(this)
  }

  inject(data: any): this {
    this.signUpVerifyToken = data['sign_up_verify_token']
    return this
  }
}
