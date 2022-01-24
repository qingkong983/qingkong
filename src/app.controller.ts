import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ow')
  ow(): any {
    return this.appService.ow();
  }

  @Get('v')
  v(): any {
    return '1.0.0';
  }
}
