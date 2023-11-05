import { DbTables } from 'src/database/constants'
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class products1669202450210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: DbTables.Products,
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'title',
            type: 'varchar'
          },
          {
            name: 'userId',
            type: 'bigint'
          }
        ]
      }),
      true
    )

    await queryRunner.createForeignKey(
      DbTables.Products,
      new TableForeignKey({
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: DbTables.Users,
        onDelete: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(DbTables.Products)
  }
}
