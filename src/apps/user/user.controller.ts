import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('myInfo')
  myInfo(@Request() request: { user: { id: number } }) {
    return this.userService.myInfo(request.user.id)
  }

  @Get('ins')
  ins(@Request() request: { user: { id: number } }) {
    return this.userService.ins()
  }
}
