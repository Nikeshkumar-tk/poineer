import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule, UserModule } from '../modules'
import { TestModule } from '../modules/test/test.module'

@Module({
  imports: [AuthModule, UserModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
