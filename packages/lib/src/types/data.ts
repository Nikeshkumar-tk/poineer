export interface BasicData {
  [key: string]: any
}

export interface OkData extends BasicData {
  ok: boolean
}

export interface User {
  username: string
  password: string
  userId: number
}
