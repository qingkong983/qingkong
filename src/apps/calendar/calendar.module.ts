import { Module } from '@nestjs/common'
import { CalendarService } from './calendar.service'
import { CalendarController } from './calendar.controller'
import { DatabaseModule } from '../database/database.module'
import { calendarProviders } from './providers/calendar.providers'

@Module({
  imports: [DatabaseModule],
  controllers: [CalendarController],
  providers: [CalendarService, ...calendarProviders],
})
export class CalendarModule {}
