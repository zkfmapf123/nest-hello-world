import { Injectable, Logger, UnauthorizedException } from '@nestjs/common'
import { User } from 'base/model'
import * as jwt from 'jsonwebtoken'

@Injectable()
export class jwtService {
  constructor() {
    /**
     * ConfigModule
     */
  }

  /**
   * @todo config.env
   */
  createToken(user: User) {
    const payload = { ...user }

    return jwt.sign(payload, 'asldkfnalskdnflaksdnf!@#', {
      expiresIn: '1d',
      audience: 'donggyu.com',
      issuer: 'donggyu.com',
    })
  }

  verify(token: any) {
    try {
      const verifyToken = jwt.verify(token, 'asldkfnalskdnflaksdnf!@#')
      // throw new Error('err')
      return verifyToken
    } catch (e) {
      throw new UnauthorizedException()
    }
  }
}
