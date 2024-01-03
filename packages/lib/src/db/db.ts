import { User } from './user'

export class DB {
  private static instance: DB
  user: User
  constructor() {
    this.user = new User()
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new DB()
    }
    return this.instance
  }
}

export const db = DB.getInstance()
