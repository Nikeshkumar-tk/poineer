import { Controller, Get, Post, Put, Req } from '@nestjs/common'
import { UserData, UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): UserData {
    return this.userService.getData()
  }

  @Post()
  createUser(@Req() request: any): UserData {
    return this.userService.getData(request.body.data)
  }

  @Put()
  updateUser(@Req() request: any): UserData {
    return this.userService.getData(request.body.data, true)
  }
}
