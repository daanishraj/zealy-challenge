/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
      '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.app.json',
          },],
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(gif|ttf|eot|svg|png|css|less)$':
   '<rootDir>/tests/mocks/fileMock.ts',
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  };
  