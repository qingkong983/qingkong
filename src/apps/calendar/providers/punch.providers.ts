import { Connection } from 'typeorm'
import {Punch} from "../entities/punch.entity";

export const punchProviders = [
  {
    provide: 'DATABASE_CONNECTION_PunchRepository',
    useFactory: (connection: Connection) => connection.getRepository(Punch),
    inject: ['DATABASE_CONNECTION'],
  },
]
