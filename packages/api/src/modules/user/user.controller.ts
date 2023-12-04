import { Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common'
import { UserData, UserService } from './user.service'
import { AuthGuard } from '../auth/auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  getUser(): UserData {
    return this.userService.getData()
  }

  @UseGuards(AuthGuard)
  @Post()
  createUser(@Req() request: any): UserData {
    return this.userService.getData(request.body.data)
  }

  @UseGuards(AuthGuard)
  @Put()
  updateUser(@Req() request: any): UserData {
    return this.userService.getData(request.body.data, true)
  }
}
