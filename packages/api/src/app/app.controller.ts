import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { Public } from '../modules/auth/auth.guard'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHealth(): any {
    return this.appService.getHealth()
  }
}
