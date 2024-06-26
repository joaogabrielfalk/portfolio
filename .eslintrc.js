module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/errors', 'plugin:import/typescript', 'plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['**/node_modules/**', '**/dist/**', '**/.next/**'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import', 'react', 'jest'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'import/namespace': 'off',
    'import/new-line-after-import': 'error',
    'import/no-cycle': [2, { maxDepth: 1, ignoreExternal: true }],
    'import/no-duplicates': 'error',
    'import/no-unresovled': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [{ pattern: '{react,react-*}', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'jest/no-commented-out-tests': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'no-console': ['error', { allow: ['debug', 'info', 'warn', 'error'] }],
    'no-unreachable': 'error',
    'react/display-name': 'off',
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'off',
    curly: [2, 'multi-or-nest'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
