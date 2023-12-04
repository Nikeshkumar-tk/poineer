import { Controller, Get, Post, Put, Req, UseGuards, BadRequestException } from '@nestjs/common'
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
  createUser(@Req() request: Request): UserData {
    if (!(request.body as any).data) throw new BadRequestException('Name is required')

    return this.userService.getData((request.body as any).data)
  }

  @UseGuards(AuthGuard)
  @Put()
  updateUser(@Req() request: Request): UserData {
    if (!(request.body as any).data) throw new BadRequestException('Name is required')

    return this.userService.getData((request.body as any).data, true)
  }
}
