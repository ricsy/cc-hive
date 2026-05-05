import antfu from '@antfu/eslint-config'

export default antfu({
  js: true,
  typescript: true,
  markdown: true,

  stylistic: {
    quotes: 'single',
    semi: false,
  },

  rules: {
    'no-console': 'off',
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
    'ts/no-require-imports': 'off',
    'unicorn/prefer-node-protocol': 'off',
  },
})
