import { Injectable } from '@nestjs/common'
import { isOk, OkData } from '@/lib'

@Injectable()
export class AppService {
  getHealth(): OkData {
    return { ok: process.env.VALID === 'true' || isOk() }
  }
}
