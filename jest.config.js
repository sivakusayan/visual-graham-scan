const setupTestsPath = '<rootDir>/src/__tests__/setupTests.js';

module.exports = {
  setupTestFrameworkScriptFile: setupTestsPath,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', setupTestsPath],
  globals: {
    window: true,
  }
};
