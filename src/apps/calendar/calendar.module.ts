import { Module } from '@nestjs/common'
import { CalendarService } from './calendar.service'
import { CalendarController } from './calendar.controller'
import { DatabaseModule } from '../database/database.module'
import { calendarProviders } from './providers/calendar.providers'
import {punchProviders} from "./providers/punch.providers";
import {PunchController} from "./punch.controller";
import {PunchService} from "./punch.service";
import {UserService} from "../user/user.service";
import {userProviders} from "../user/providers/user.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [CalendarController,PunchController],
  providers: [CalendarService,PunchService,UserService,...userProviders, ...calendarProviders,...punchProviders],
})
export class CalendarModule {}
