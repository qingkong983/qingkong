import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Calendar } from './entities/calendar.entity'
import { InjectRepository } from '@nestjs/typeorm'
import * as moment from 'moment-timezone'

@Injectable()
export class CalendarService extends TypeOrmCrudService<Calendar> {
  constructor(@InjectRepository(Calendar, 'DATABASE_CONNECTION') repo) {
    super(repo)
  }

  async ow() {
    const defaultM = {
      id: -1,
      createdAt: '2022-01-18T07:48:38.690Z',
      updatedAt: '2022-01-18T08:01:45.000Z',
      proposal: '',
      content: '',
      from: '',
      profession: '',
      author: '',
      authorOriginName: '',
      date: '2022-01-19',
    }
    const m = moment().tz('Asia/Shanghai').format('YYYY-MM-DD')
    const repoFindOneRes = await this.repo.findOne({ date: m })
    const ret = repoFindOneRes || defaultM
    return ret
  }
}
