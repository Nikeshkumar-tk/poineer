import { Injectable } from '@nestjs/common'

const dataMapper = (data: string | undefined = Date.now().toString()) => ({ data })

@Injectable()
export class UserService {
  constructor() {}

  getData(data?: string): UserData {
    return dataMapper(data)
  }
}

export interface UserData<T extends any = string> {
  data: T
}
