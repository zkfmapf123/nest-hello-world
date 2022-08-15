import { alias, serializable, serialize as sz } from 'serializr'
import { Serializeable } from 'utils/interface'

/**
 * userEntity와 Sync가 맞아야한다
 */
export class User implements Serializeable {
  @serializable(alias('email')) userEmail: string
  @serializable(alias('password')) userPassword: string
  @serializable(alias('name')) userName: string
  @serializable token: string

  constructor(data = {}) {
    this.inject(data)
  }

  toDict() {
    return sz(this)
  }

  inject(data: any): this {
    this.userEmail = data['email']
    this.userPassword = data['password']
    this.userName = data['name']
    this.token = null
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
