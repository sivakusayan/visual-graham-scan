const testsPath = '<rootDir>/src/__tests__';
const setupTestsPath = `${testsPath}/setupTests.js`;
const constantsPath = `${testsPath}/__constants__`;
const mocksPath = `${testsPath}/__mocks__`;

module.exports = {
  setupTestFrameworkScriptFile: setupTestsPath,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', setupTestsPath, constantsPath, mocksPath],
  globals: {
    window: true,
  },
};
