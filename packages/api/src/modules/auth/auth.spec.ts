import { Test, TestingModule } from '@nestjs/testing'
import { JwtModule } from '@nestjs/jwt'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'

describe('AuthController', () => {
  let authController: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: process.env.JWT_SECRET,
          signOptions: { expiresIn: '1h' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService],
    }).compile()

    authController = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => expect(authController).toBeDefined())

  describe('signIn', () => {
    it('should return access_token', async () => {
      const response = await authController.signIn({ username: 'john', pass: 'changeme' })

      expect(response).toBeDefined()
      expect(response.access_token).toBeDefined()
    })
  })
})
