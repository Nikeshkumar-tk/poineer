import { Injectable } from '@nestjs/common'
import { dataMapper } from '@/lib'

@Injectable()
export class UserService {
  constructor() {}

  getData(data?: string, check: boolean | undefined = false): UserData {
    return dataMapper(data, { noDErr: !!check })
  }
}

export interface UserData<T extends any = string> {
  data: T
}
