import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('Users')
export class UserEntity {
  constructor(users = {}) {
    this.id = users['id']
    this.name = users['name']
    this.email = users['email']
    this.password = users['password']
    this.token = users['token']
  }

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 30 })
  name: string

  @Column({ length: 100 })
  email: string

  @Column({ length: 50 })
  password: string

  @Column({ length: 255, default: null })
  token: string
}
