/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-01 14:02:36
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-01 15:25:23
 */
module.exports = {
  moduleFileExtensions: ['js', 'ts', 'jsx', 'tsx'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!<rootDir>/packages/__tests__/**/*',
    '!<rootDir>/build/**/*',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/__fixtures__/', '/fixtures/', '/__tests__/helpers/', '/__tests__/utils/', '__mocks__'],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  globals: {
    'ts-jest': {
      babelConfig: './babel.config.js',
    },
  }
};