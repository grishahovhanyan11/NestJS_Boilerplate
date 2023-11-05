import 'dotenv/config'
import { DataSource } from 'typeorm'
import { DatabaseConfigs } from './config'

export default new DataSource(DatabaseConfigs)
