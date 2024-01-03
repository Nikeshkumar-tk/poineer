import { BadRequestException, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common'
import { AuthGuard } from '../auth/auth.guard'
import { UserData, UserService } from './user.service'
import { Request } from 'express'
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
  async createUser(@Req() request: Request) {
    /**
     * Request body should consist of more data than just the name.
     * Incoming data should be validated.
     * For user creation, the password should be hashed.
     * This code is not modified to keep the tests not failing.
     */
    if (!(request.body as any).data) throw new BadRequestException('Name is required')
    return this.userService.getData((request.body as any).data, true)
  }

  @UseGuards(AuthGuard)
  @Put()
  updateUser(@Req() request: Request): UserData {
    /**
     * Request body should consist of more data than just the name.
     * Incoming data should be validated.
     * This code is not modified to keep the tests not failing.
     */
    if (!(request.body as any).data) throw new BadRequestException('Name is required')

    return this.userService.getData((request.body as any).data, true)
  }
}
