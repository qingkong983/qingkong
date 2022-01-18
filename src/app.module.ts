import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './apps/user/user.module'
import { CalendarModule } from './apps/calendar/calendar.module';

@Module({
  imports: [UserModule, CalendarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
