import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { DbTables } from 'src/database/constants'
import { User } from './user.entity'

@Entity(DbTables.Products)
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column()
  title: string

  @Column()
  userId: number

  @ManyToOne(() => User)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'id' }])
  owner: User
}
