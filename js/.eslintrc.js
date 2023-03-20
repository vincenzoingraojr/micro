module.exports = {
  parser: 'babel-eslint',
  plugins: ['@typescript-eslint', 'react-hooks', 'no-only-tests'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        'react/jsx-indent': 0, //disabeld as it throws the error: "TypeError: Cannot read property 'type' of null"
        '@typescript-eslint/ban-ts-comment': [
          0,
          {
            'ts-ignore': 'allow-with-description',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-empty-function': 1,

        //disable rules as we use @typescript-eslint/no-use-before-define
        'no-use-before-define': 0,
      },
    },
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  rules: {
    'no-multi-spaces': 0,
    'padded-blocks': 0,
    camelcase: 0,
    'react/sort-comp': 0,
    'no-cond-assign': 0,
    'react/no-did-update-set-state': 0,
    'no-restricted-syntax': 0,
    'no-lonely-if': 0,
    'no-prototype-builtins': 0,
    'no-console': 'error',
    'spaced-comment': 0,
    'space-before-function-paren': 0,
    'no-confusing-arrow': 0,
    'no-mixed-operators': 0,
    indent: 0,
    curly: 0,
    'max-len': 0,
    'comma-dangle': 0,
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'new-cap': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'class-methods-use-this': 0,
    'import/no-webpack-loader-syntax': 0,
    'import/extensions': 0,
    'jsx-a11y/img-has-alt': 0,
    'react/require-default-props': 0,
    'react/display-name': 1,
    'react/no-direct-mutation-state': 1,
    'no-restricted-imports': [
      'error',
      {
        name: 'lodash-es',
        message:
          'Please use lodash instead. Rollup will replace lodash with lodash-es for esm.',
      },
    ],
  },
  settings: {
    'import/core-modules': [
      '@micro-text/buttons',
      '@micro-text/buttons/lib/plugin.css',
      '@micro-text/utils',
      '@micro-text/linkify',
      '@micro-text/linkify/lib/plugin.css',
      '@micro-text/mention',
      '@micro-text/mention/lib/plugin.css',
      '@micro-text/editor',
      '@micro-text/editor/lib/plugin.css',
      '@micro-text/undo',
      '@micro-text/undo/lib/plugin.css',
    ],
    'import/resolver': {
      node: true,
      'eslint-import-resolver-typescript': true,
    },
  },
};