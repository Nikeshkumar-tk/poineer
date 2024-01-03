import { BadRequestException, Controller, Post, Req } from '@nestjs/common'
import type { Request } from 'express'

import { Public } from './auth.guard'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signin')
  async signIn(@Req() request: Request) {
    const body = request.body as any
    if (!body.username || !body.password) throw new BadRequestException('Username and password are required')
    return this.authService.findOne(body.username, body.password)
  }
}
