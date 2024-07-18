import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  displayName: 'sdk tests',
  testEnvironment: 'node',
  // fix for leftover handles when running locally on macos
  forceExit: true,
  preset: 'ts-jest',
  verbose: false,
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  maxWorkers: 1,
  testTimeout: 60_000,
};

export default jestConfig;