import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import { AppModule } from './src/app/app.module'

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile()
  globalThis.APP = moduleRef.createNestApplication() as INestApplication
  await globalThis.APP.init()
})

afterAll(async () => {
  if (globalThis.APP) await globalThis.APP.close()
})
