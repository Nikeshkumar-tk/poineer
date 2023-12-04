import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ]

  constructor(private jwtService: JwtService) {}

  async findOne(username, pass) {
    const user = this.users.find((user) => user.username === username)

    if (user?.password !== pass) throw new UnauthorizedException()

    return { access_token: await this.jwtService.signAsync({ sub: user.userId, username: user.username }) }
  }
}
