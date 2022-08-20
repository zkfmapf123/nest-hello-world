import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'base/model'
import { UserEntity } from 'src/entity/user.entity'
import { Connection, EntityManager, getConnection, getManager, Repository } from 'typeorm'
import { Repositoriable, TransactionAble } from 'utils/interface'

@Injectable()
export class UserRepository implements Repositoriable<UserEntity>, TransactionAble {
  @InjectRepository(UserEntity) users: Repository<UserEntity>
  entityManager: EntityManager

  constructor() {
    this.entityManager = getManager()
  }

  async findOne(property: keyof UserEntity, params: string): Promise<UserEntity> {
    return await this.users.findOne({ [property]: params })
  }

  /**
   * @desc
   * use trasnaction
   */
  async transactionCreate(userParams: User): Promise<void> {
    const queryRunner = getConnection().createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()

    try {
      await queryRunner.manager.save(userParams.toEntity())
      await queryRunner.commitTransaction()
    } catch (e) {
      Logger.error(e)
      await queryRunner.rollbackTransaction()
    } finally {
      await queryRunner.release()
    }
  }
}
