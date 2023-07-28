module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'eslint-plugin-react', '@typescript-eslint', 'unused-imports'],
  rules: {
    // indent: ['error', 2, { SwitchCase: 2 }],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    semi: ['error', 'never'],

    'react/prop-types': 0,
    'no-use-before-define': 0,
    'no-extra-boolean-cast': 0,
    'react/react-in-jsx-scope': 0,
    'react/display-name': ['warn'],
    'react/jsx-no-target-blank': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
