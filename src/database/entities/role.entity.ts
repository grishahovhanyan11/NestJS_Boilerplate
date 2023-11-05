import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import { DbTables } from 'src/database/constants'
import { User } from './user.entity'

@Entity(DbTables.Roles)
export class Role {
  @PrimaryGeneratedColumn({ type: 'tinyint' })
  id: number

  @Column({ unique: true })
  name: string

  @OneToMany(() => User, (user) => user.role)
  @JoinColumn([{ name: 'id', referencedColumnName: 'roleId' }])
  users: User
}
