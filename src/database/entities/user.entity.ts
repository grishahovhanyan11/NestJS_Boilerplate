import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { DbTables } from 'src/database/constants'

import { PasswordTransformer } from '../../common/transformers/password.transformer'
import { Role } from './role.entity'
import { Product } from './product.entity'

@Entity(DbTables.Users)
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number

  @Column({ unique: true })
  email: string

  @Column({
    name: 'password',
    transformer: new PasswordTransformer(),
    nullable: false
  })
  password: string

  @Column()
  roleId: number

  @ManyToOne(() => Role)
  @JoinColumn([{ name: 'roleId', referencedColumnName: 'id' }])
  role: Role

  @OneToMany(() => Product, (product) => product.owner)
  @JoinColumn([{ name: 'id', referencedColumnName: 'userId' }])
  products: Product

  toJSON() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...self } = this
    return self
  }
}
