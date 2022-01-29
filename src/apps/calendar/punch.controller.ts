import { Crud, CrudController } from '@nestjsx/crud'
import { CalendarService } from './calendar.service'
import { Calendar } from './entities/calendar.entity'
import {Controller, Get, UseGuards, Request, Post} from '@nestjs/common'
import {JwtAuthGuard} from "../auth/guards/jwt-auth.guard";
import {Punch} from "./entities/punch.entity";
import {PunchService} from "./punch.service";

@Crud({
  model: {
    type: Punch,
  },
})
@Controller('punch')
export class PunchController implements CrudController<Punch> {
  constructor(public service: PunchService) {}

  // 需要鉴权的接口
  @UseGuards(JwtAuthGuard)
  @Post('/recordPunch')
  recordPunch(@Request() req) {
    return this.service.recordPunch({puncher:req.user.id})
  }

  @Post('/todayPunch')
  todayPunch() {
    return this.service.todayPunch()
  }



}
