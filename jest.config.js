module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/dist/',
    'node_modules/(?!react-native|react-native-flash-message|@react-native|@react-navigation)',
  ],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js|jsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
