import { JestTestResult } from '@/lib'
import { Injectable } from '@nestjs/common'
import { exec as execAsync } from 'child_process'
import { readFileSync } from 'fs'
import { promisify } from 'util'
const exec = promisify(execAsync)

@Injectable()
export class TestService {
  async runTestAndGetResult(): Promise<JestTestResult> {
    try {
      await exec('npx nx run api:test --json --outputFile=test_results.json')
      return getTestResultJson()
    } catch (error) {
      console.error(error)
      return {
        message: "Some tests failed or there's an error in the test runner",
        ...getTestResultJson(), // still return the test results if there's an error,
      }
    }
  }
}

function getTestResultJson(): JestTestResult {
  const result = readFileSync('test_results.json', 'utf-8')
  return {
    result: JSON.parse(result),
  }
}
