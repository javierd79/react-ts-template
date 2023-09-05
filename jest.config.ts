// jest.config.ts

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Procesa archivos .ts y .tsx con ts-jest
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js', // Corrige el path de los mocks
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Añade las extensiones de los archivos
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
      isolatedModules: true,
      esModuleInterop: true,
    },
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  // Desactiva el soporte de módulos ESM
  testRunner: 'jest-circus/runner',
};

