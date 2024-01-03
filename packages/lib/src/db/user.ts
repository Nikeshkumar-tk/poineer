import { readFileSync, writeFileSync } from 'fs'
import { UserInfo } from '../types'

const MOCK_DB_FILE = 'mock_db.json'

export class User {
  private users: UserInfo[]
  constructor() {
    this.users = []
    this.loadDatabase()
  }
  private loadDatabase(): void {
    try {
      const dbData = readFileSync(MOCK_DB_FILE, 'utf-8')
      this.users = JSON.parse(dbData)
    } catch (error) {
      console.error('Error loading mock database:', error.message)
    }
  }
  private saveDatabase(): void {
    writeFileSync(MOCK_DB_FILE, JSON.stringify(this.users, null, 2), 'utf-8')
  }

  createUser(data: UserInfo) {
    // Passwords should be hashed in a real app
    const newUser = { ...data }
    this.users.push(newUser)
    this.saveDatabase()
    return newUser
  }
  getUser(username: string) {
    const user = this.users.find((user) => user.username === username)
    return user
  }
}
