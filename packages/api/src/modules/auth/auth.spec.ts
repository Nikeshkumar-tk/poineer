import request from 'supertest'

describe('AuthController', () => {
  describe('POST signin', () => {
    const urlPath = '/auth/signin'

    it('should allow signin with proper credentials', async () => {
      const response = await request(globalThis.APP.getHttpServer())
        .post(urlPath)
        .send({ username: 'john', password: 'changeme' })
        .expect(201)

      expect(response.body).toBeDefined()
      expect(response.body.access_token).toBeDefined()
    })

    it('should throw an error', async () => {
      const response = await request(globalThis.APP.getHttpServer())
        .post(urlPath)
        .send({ username: 'test', password: 'test' })
        .expect(401)

      expect(response.body).toBeDefined()
      expect(response.body.message).toBe('Unauthorized')
    })
  })
})
