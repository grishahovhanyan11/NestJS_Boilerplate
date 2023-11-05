import * as path from 'path'
import { ConfigService } from '@nestjs/config'
import { DataSourceOptions } from 'typeorm'

import { roles1669181156700 } from './migrations/1669181156700-create_roles_table'
import { users1669184242705 } from './migrations/1669184242705-create_users_table'
import { products1669202450210 } from './migrations/1669202450210-create_products_table'
import { rolesseeders1670225090073 } from './seeders/1670225090073-roles_seeders'

const configService = new ConfigService()
export const DatabaseConfigs: DataSourceOptions = {
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: 3306,
  username: configService.get('DB_USER'),
  password: String(configService.get('DB_PASSWORD')),
  database: configService.get('DB_NAME'),
  entities: [path.join(__dirname, 'entities', '*.entity{.ts,.js}')],
  synchronize: false,
  migrations: [roles1669181156700, users1669184242705, products1669202450210, rolesseeders1670225090073],
  logging: configService.get('IS_DB_LOGGING') === 'true'
}
