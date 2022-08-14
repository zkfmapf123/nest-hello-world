import { Module } from '@nestjs/common'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'

const appModuels = [UsersModule]
const infrastructureModules = []
const queues = []

@Module({
  imports: [...appModuels, ...infrastructureModules],
  controllers: [],
})
export class AppModule {
  // Logger
  constructor() {}
}
