import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'base/model'
import { UserEntity } from 'src/entity/user.entity'
import { EntityManager, getManager, Repository } from 'typeorm'
import { Repositoriable } from 'utils/interface'

@Injectable()
export class UserRepository implements Repositoriable<UserEntity> {
  @InjectRepository(UserEntity) users: Repository<UserEntity>
  entityManager: EntityManager

  constructor() {
    this.entityManager = getManager()
  }

  async findOne(property: keyof UserEntity, params: string): Promise<UserEntity> {
    return await this.users.findOne({ [property]: params })
  }

  async create(userParams: User): Promise<void> {
    const users = userParams.toDict()
    await this.users.save(users)
  }
}
