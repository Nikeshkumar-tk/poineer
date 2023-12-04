import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'

describe('UserController', () => {
  let userController: UserController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile()

    userController = app.get<UserController>(UserController)
  })

  describe('get data', () => {
    it('should not be isNaN', () => {
      const response = userController.getUser()
      expect(response).toBeDefined()
      expect(isNaN(response.data as any)).toBeFalsy()
    })
  })

  describe('post data', () => {
    it('output data should match input', () => {
      const name = 'Bob Smith'
      const response = userController.createUser({ body: { data: name } })
      expect(response).toBeDefined()
      expect(response.data).toBe(name)
    })

    it('default data response should be error', () => {
      const response = userController.createUser({ body: {} })
      expect(response).toBeDefined()
    })
  })
})