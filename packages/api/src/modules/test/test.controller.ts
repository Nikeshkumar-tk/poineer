import { Controller, Get } from '@nestjs/common'
import { TestService } from './test.service'
import { Public } from '../auth/auth.guard'
import { JestTestResult } from '@/lib'

@Controller('test')
export class TestController {
  constructor(private readonly appService: TestService) {}

  @Public()
  @Get()
  async runTestAndGetResult(): Promise<JestTestResult> {
    return await this.appService.runTestAndGetResult()
  }
}
