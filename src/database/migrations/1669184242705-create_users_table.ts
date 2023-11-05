import { DbTables } from 'src/database/constants'
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class users1669184242705 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: DbTables.Users,
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar'
          },
          {
            name: 'roleId',
            type: 'tinyint'
          }
        ]
      }),
      true
    )

    await queryRunner.createForeignKey(
      DbTables.Users,
      new TableForeignKey({
        columnNames: ['roleId'],
        referencedColumnNames: ['id'],
        referencedTableName: DbTables.Roles,
        onDelete: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DbTables.Users)
  }
}
