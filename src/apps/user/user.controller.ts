import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import axios from 'axios';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

  @Post('wxLogin')
  async wxLogin(@Body() createUserDto: any) {
    // 如果code小于8就是测试
    if (createUserDto.code.length < 8) {
      // 2.拿openId查是否注册了，注册了在内部模拟登陆，拿token
      const checkIsHasUserRes = await this.userService.checkIsHasUser(
          createUserDto.code,
      );
      return {
        token: checkIsHasUserRes.token,
        openid: createUserDto.code,
        session_key: 'session_key',
        isHasUser: true,
      };
    }

    // 1.拿code查openid
    const jscode2sessionRes = await axios
        .get(`https://api.weixin.qq.com/sns/jscode2session`, {
          params: {
            appid: 'wx658151ab012a8e06',
            secret: '1525008cc7c17ec8300d985e6f5939a8',
            js_code: createUserDto.code,
            grant_type: 'authorization_code',
          },
        })
        .then((res) => res.data);
    // 2.拿openId查是否注册了，注册了在内部模拟登陆，拿token
    const checkIsHasUserRes = await this.userService.checkIsHasUser(
        jscode2sessionRes.openid,
    );
    // 返回数据
    return {
      token: checkIsHasUserRes.token,
      openid: jscode2sessionRes.openid,
      session_key: jscode2sessionRes.session_key,
      isHasUser: checkIsHasUserRes.token ? true : false,
    };
  }

  @Post()
  create(@Body() createUserDto: any) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  // 需要鉴权的接口
  @UseGuards(JwtAuthGuard)
  @Get('getuserinfo')
  findOne(@Request() request: { user: { id: number } }) {
    return this.userService.findOne(request.user.id);
  }

  @Post('wxCreateAndUpdate')
  wxCreateAndUpdate(@Body() body) {
    console.log(body, 'body');
    return this.userService.wxCreateAndUpdate(body);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
