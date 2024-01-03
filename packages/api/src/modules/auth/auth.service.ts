import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User, isGoodRequest } from '@/lib'

@Injectable()
export class AuthService {
  private readonly users: User[] = [
    { userId: 1, username: 'john', password: 'changeme' },
    { userId: 2, username: 'maria', password: 'guess' },
  ]

  constructor(private jwtService: JwtService) {}

  async findOne(username, pass) {
    const user = this.users.find((user) => user.username === username)
    isGoodRequest(user, pass)
    const access_token = await this.jwtService.signAsync({ sub: user.userId, username: user.username })
    return { access_token }
  }
}
