import { JwtService } from '@nestjs/jwt'
import request from 'supertest'

const getAuthCred = async (id, name) => {
  const jwtService = new JwtService({ secret: process.env.JWT_SECRET })
  const token = await jwtService.signAsync({ sub: id, username: name })

  return `Bearer ${token}`
}

describe('UserController', () => {
  describe('GET /user', () => {
    const urlPath = '/user'

    it('should not allow access without valid sign in header', async () => {
      await request(globalThis.APP.getHttpServer()).get(urlPath).expect(401)
    })

    it('should not be isNaN', async () => {
      const authCred = await getAuthCred(1, 'john')
      const response = await request(globalThis.APP.getHttpServer())
        .get(urlPath)
        .set({ Authorization: authCred })
        .expect(200)

      expect(response).toBeDefined()
      expect(isNaN(response.body.data)).toBeFalsy()
    })
  })

  describe('POST /user', () => {
    const urlPath = '/user'

    it('should not allow access without valid sign in header', async () => {
      await request(globalThis.APP.getHttpServer()).post(urlPath).expect(401)
    })

    it('output data should match input', async () => {
      const authCred = await getAuthCred(1, 'john')
      const name = 'Bob Smith'
      const response = await request(globalThis.APP.getHttpServer())
        .post(urlPath)
        .send({ data: name })
        .set({ Authorization: authCred })
        .expect(201)

      expect(response).toBeDefined()
      expect(response.body.data).toBe(name)
    })

    it('default data response should be error', async () => {
      const authCred = await getAuthCred(1, 'john')
      const response = await request(globalThis.APP.getHttpServer())
        .post(urlPath)
        .send({})
        .set({ Authorization: authCred })
        .expect(400)
      expect(response).toBeDefined()
    })
  })

  describe('PUT /user', () => {
    const urlPath = '/user'

    it('should not allow access without valid sign in header', async () => {
      await request(globalThis.APP.getHttpServer()).put(urlPath).expect(401)
    })

    it('output data should match input', async () => {
      const authCred = await getAuthCred(1, 'john')
      const name = 'Bob Smith'
      const response = await request(globalThis.APP.getHttpServer())
        .put(urlPath)
        .send({ data: name })
        .set({ Authorization: authCred })
        .expect(200)
      expect(response).toBeDefined()
      expect(response.body.data).toBe(name)
    })

    it('default data response should be error', async () => {
      const authCred = await getAuthCred(1, 'john')
      const response = await request(globalThis.APP.getHttpServer())
        .put(urlPath)
        .set({ Authorization: authCred })
        .expect(400)
      expect(response).toBeDefined()
      expect(response.body.message).toBe('Name is required')
    })
  })
})
