import {Controller, Get, Post, UseGuards,Request} from '@nestjs/common';
import { AppService } from './app.service';
import {LocalAuthGuard} from "./apps/auth/guards/local-auth.guard";
import {JwtAuthGuard} from "./apps/auth/guards/jwt-auth.guard";
import {AuthService} from "./apps/auth/auth.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,    private readonly authService: AuthService,) {}

  @Get('v')
  v(): any {
    return '1.0.0';
  }


  // 颁发token的接口，其他接口要用，直接用axios请求
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  // 需要鉴权的接口
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
