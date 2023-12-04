import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { AppModule } from '../../app/app.module'

describe('AuthController', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  describe('POST signin', () => {
    const urlPath = '/auth/signin'

    it('should allow signin with proper credentials', async () => {
      const response = await request(app.getHttpServer())
        .post(urlPath)
        .send({ username: 'john', password: 'changeme' })
        .expect(201)

      expect(response.body).toBeDefined()
      expect(response.body.access_token).toBeDefined()
    })

    it('should throw an error', async () => {
      const response = await request(app.getHttpServer())
        .post(urlPath)
        .send({ username: 'test', password: 'test' })
        .expect(401)

      expect(response.body).toBeDefined()
      expect(response.body.message).toBe('Unauthorized')
    })
  })
})
