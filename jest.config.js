//eslint-disable-next-line
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '<rootDir>/dist',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@context/(.*)': '<rootDir>/context/$1',
    '@public/(.*)': '<rootDir>/public/$1',
    '@components/(.*)': '<rootDir>/components/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/components/**/*.{js,jsx,ts,tsx}'],
};

module.exports = createJestConfig(customJestConfig);
