module.exports = {
  extends: ['motley-typescript', 'plugin:@next/next/recommended'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: false }],
    '@typescript-eslint/no-explicit-any': 'off',
    'consistent-return': 1,
    'prefer-destructuring': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/no-children-prop': 'off',
  },
  ignorePatterns: ['generated/graphql.tsx'],
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
