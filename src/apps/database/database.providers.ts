import { createConnection } from 'typeorm'
import * as mongoose from 'mongoose'

const database = JSON.parse(process.env.DATABASE)

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: database.type,
        host: database.host,
        port: database.port,
        username: database.username,
        password: database.password,
        database: database.database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        // charset:'utf8mb4'
        // mysql数据库编码使用utf8mb4_general_ci
      }),
  },
]
