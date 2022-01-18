import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { CalendarService } from './calendar.service'
import { CreateCalendarDto } from './dto/create-calendar.dto'
import { UpdateCalendarDto } from './dto/update-calendar.dto'
import { Calendar } from './entities/calendar.entity'

@Crud({
  model: {
    type: Calendar,
  },
})
@Controller('calendar')
export class CalendarController implements CrudController<Calendar> {
  constructor(public service: CalendarService) {}
}
