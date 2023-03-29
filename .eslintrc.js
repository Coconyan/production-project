module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    indent: [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [
      2,
      { indentMode: 2, ignoreTernaryOperator: true },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'no-shadow': 'off',
    'no-undef': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'i18next/no-literal-string': [
      'error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
    ],
    'max-len': ['error', { ignoreComments: true, code: 110 }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': off,
      },
    },
  ],
};
