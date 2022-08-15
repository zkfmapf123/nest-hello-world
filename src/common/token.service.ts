import { Injectable } from '@nestjs/common'
import * as uuid from 'uuid'

@Injectable()
export class TokenService {
  createToken(): string {
    return uuid.v4()
  }
}
