const setupTestsPath = '<rootDir>/src/components/__tests__/setupTests.js';

module.exports = {
  setupTestFrameworkScriptFile: setupTestsPath,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', setupTestsPath]
};
