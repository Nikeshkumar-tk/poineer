import { Controller } from '@nestjs/common'

import { AuthService } from './auth.service'

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async signIn(username: string, pass: string) {
    return await this.authService.findOne(username, pass)
  }
}
