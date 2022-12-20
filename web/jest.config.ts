export default {
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "src/page/**/*.tsx",
        "src/components/**/*.tsx",
        "src/hooks/*.tsx",
        "!src/routes/index.tsx",
        "!src/styles/*.css",
        "!src/interfaces/*.ts"
      ],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/fileMock.js',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  }