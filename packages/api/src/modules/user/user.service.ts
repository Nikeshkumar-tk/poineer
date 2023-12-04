import { Injectable } from '@nestjs/common'

const dataMapper = (data: string | undefined, { noDErr = false }: { noDErr?: boolean } = {}) => {
  if (!data && noDErr) throw new Error('No data provided')

  return { data: data ?? Date.now().toString() }
}

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
