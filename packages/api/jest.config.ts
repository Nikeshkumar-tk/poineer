import type { Config } from 'jest'

/* eslint-disable */
export default {
  displayName: 'api',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/api',
  setupFilesAfterEnv: ['<rootDir>/jest.init.ts'],
  globalSetup: '<rootDir>/jest.setup.ts',
  reporters: ['jest-silent-reporter', 'summary'],
} as Config
