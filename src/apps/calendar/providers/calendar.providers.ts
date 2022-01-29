import { Connection } from 'typeorm'
import { Calendar } from '../entities/calendar.entity'

export const calendarProviders = [
  {
    provide: 'DATABASE_CONNECTION_CalendarRepository',
    useFactory: (connection: Connection) => connection.getRepository(Calendar),
    inject: ['DATABASE_CONNECTION'],
  },
]
