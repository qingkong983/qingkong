import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Calendar } from './entities/calendar.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CalendarService extends TypeOrmCrudService<Calendar> {
  constructor(@InjectRepository(Calendar, 'DATABASE_CONNECTION') repo) {
    super(repo)
  }
}
