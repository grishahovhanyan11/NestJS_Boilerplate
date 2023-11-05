import { MigrationInterface, QueryRunner } from 'typeorm'
import { Role } from '../entities/role.entity'
import { DbTables } from 'src/database/constants'

export class rolesseeders1670225090073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<Role>(Role, {
        name: 'admin'
      })
    )
    await queryRunner.manager.save(
      queryRunner.manager.create<Role>(Role, {
        name: 'user'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM ${DbTables.Roles}`)
  }
}
