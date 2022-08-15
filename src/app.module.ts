import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './entity/user.entity'
import { UsersModule } from './users/users.module'

const appModuels = [UsersModule]
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
export class AppModule {
  // Logger
  constructor() {}
}
