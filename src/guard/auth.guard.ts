import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { jwtService } from 'src/verify/jwt.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: jwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    return this.validateRequest(request)
  }

  private validateRequest(req: any) {
    const jwtString = req.headers.authorization.split('Bearer ')[1]

    this.jwtService.verify(jwtString)
    return true
  }
}
