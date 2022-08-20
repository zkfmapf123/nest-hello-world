import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Cookie Parser ...')
    next()
  }
}
