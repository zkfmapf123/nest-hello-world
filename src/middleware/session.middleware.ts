import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'

@Injectable()
export class SessionMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Auth Parser ...')
    next()
  }
}
