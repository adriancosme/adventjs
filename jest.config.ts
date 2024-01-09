import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'node',
    preset: 'ts-jest',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],    
};

export default config;