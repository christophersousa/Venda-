export default {
    testEnvironment: "jsdom",
    collectCoverageFrom: [
        "!src/page/**/*.tsx",
        "src/components/Carousel/*.tsx",
        "src/components/CarouselProduto/*.tsx",
        "src/components/Dropdown/*.tsx",
        "src/hooks/useMask.tsx",
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