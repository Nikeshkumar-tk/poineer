import { Body, Controller, Post } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body('username') body: { username: string; pass: string }) {
    return await this.authService.findOne(body.username, body.pass)
  }
}
