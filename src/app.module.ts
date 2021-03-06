import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './apps/user/user.module'
import { CalendarModule } from './apps/calendar/calendar.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import {AuthModule} from "./apps/auth/auth.module";
@Module({
  imports: [
    UserModule,
    CalendarModule,
      AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
