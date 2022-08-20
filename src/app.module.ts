import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entity/user.entity'
import { AuthMiddleware } from './middleware/auth.middleware'
import { CookieMiddleware } from './middleware/cookie.middleware'
import { ParseMiddleware } from './middleware/parse.middleware'
import { SessionMiddleware } from './middleware/session.middleware'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'

const appModuels = [UsersModule]
const middlewares = [AuthMiddleware, CookieMiddleware, ParseMiddleware, SessionMiddleware]
const infrastructureModules = []
const queues = []

@Module({
  imports: [
    ...appModuels,
    ...infrastructureModules,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'nest_user',
      entities: [UserEntity],
      synchronize: true, // do not production
    }),
  ],
  controllers: [],
})
export class AppModule implements NestModule {
  // Logger
  constructor() {}

  configure(consumer: MiddlewareConsumer): any {
    // consumer.apply(...middlewares).forRoutes('/')
    consumer.apply(...middlewares).forRoutes(UsersController)
  }
}
