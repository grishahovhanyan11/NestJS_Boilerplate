import { DbTables } from 'src/database/constants'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class roles1669181156700 implements MigrationInterface {
  // You don’t have to create a separate table for Roles!
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: DbTables.Roles,
        columns: [
          {
            name: 'id',
            type: 'tinyint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DbTables.Roles)
  }
}
