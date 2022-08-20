import { alias, serializable, serialize as sz } from 'serializr'
import { UserEntity } from 'src/entity/user.entity'
import { Serializeable } from 'utils/interface'

/**
 * userEntity와 Sync가 맞아야한다
 */
export class User implements Serializeable<UserEntity> {
  @serializable(alias('email')) email: string
  @serializable(alias('password')) password: string
  @serializable(alias('name')) name: string
  @serializable token: string

  constructor(data = {}) {
    this.inject(data)
  }

  toEntity(): UserEntity {
    const user = this.toDict()
    const userEntity = new UserEntity(user)
    return userEntity
  }

  toDict() {
    return sz(this)
  }

  inject(data: any): this {
    this.email = data['email']
    this.password = data['password']
    this.name = data['name']
    this.token = null
    return this
  }
}

export class VerifyToken implements Serializeable<never> {
  @serializable(alias('sign_up_verify_token')) signUpVerifyToken: string

  constructor(data = {}) {
    this.inject(data)
  }

  toDict() {
    return sz(this)
  }

  toEntity(): never {
    throw new Error('not have entity')
  }

  inject(data: any): this {
    this.signUpVerifyToken = data['sign_up_verify_token']
    return this
  }
}
