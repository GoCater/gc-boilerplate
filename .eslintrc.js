module.exports = {
  rules: {
    'no-unused-vars': [2],
    'no-console': 1,
    'no-useless-constructor': 2,
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'arrow-spacing': 2,
    'generator-star-spacing': [2, {before: true, after: false}],
    'no-confusing-arrow': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-var': 2,
    'prefer-template': 1,
    'require-yield': 2,
    'no-process-env': 1,
    'comma-dangle': [1, 'always-multiline'],
    'no-magic-numbers': [
      0,
      {
        ignore: [-1,0,1]
      }
    ],
    'no-useless-concat': [1],
    'lines-around-comment': 0,
  },
  plugins: [
    'import'
  ],
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    '.eslintrcbase.js',
  ],
  settings: {
    exclude: [/node_modules/],
    'import/ignore': [/\.(scss | less | css)/, /node_modules/]
  }
};
