import { Crud, CrudController } from '@nestjsx/crud'
import { CalendarService } from './calendar.service'
import { Calendar } from './entities/calendar.entity'
import { Controller, Get } from '@nestjs/common'

@Crud({
  model: {
    type: Calendar,
  },
})
@Controller('calendar')
export class CalendarController implements CrudController<Calendar> {
  constructor(public service: CalendarService) {}

  @Get('ow')
  ow(): any {
    return this.service.ow()
  }
}
