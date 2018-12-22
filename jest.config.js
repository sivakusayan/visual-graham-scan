const setupTestsPath = '<rootDir>/src/components/__tests__/setupTests.js';

module.exports = {
  setupTestFrameworkScriptFile: setupTestsPath,
  testPathIgnorePatterns: ['/nodule_modules/', setupTestsPath]
};
