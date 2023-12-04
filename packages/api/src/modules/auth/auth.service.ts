import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { isGoodRequest } from '@/lib'

@Injectable()
export class AuthService {
  private readonly users: any[] = [
    { userId: 1, username: 'john', password: 'changeme' },
    { userId: 2, username: 'maria', password: 'guess' },
  ]

  constructor(private jwtService: JwtService) {}

  findOne(username, pass) {
    const user = this.users.find((user) => user.username === username)
    isGoodRequest(user, pass)

    return { access_token: this.jwtService.signAsync({ sub: user.userId, username: user.username }) }
  }
}
