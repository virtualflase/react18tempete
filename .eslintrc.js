module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended', // create react app已安装，使用eslint中recommened的规则
    'plugin:react/recommended', // create react app已安装, recommended react linting configs
    'plugin:@typescript-eslint/recommended', // 需额外手动安装 @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended' // 安装好Prettier再添加，可先删除
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser', // 需手动安装 @typescript-eslint/parser，This allows Eslint to understand TypeScript syntax
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    sourceType: 'module', // Allows for the use of imports
    project: ['./tsconfig.json']
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    // 'import/first': 'error',
    // 'react/prop-types': 'off',
    'promise/param-names': 0,
    // 关闭react在jsx页面必须要在头部引入react的规则(react18不再需要在头部引入react了)
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/promise-function-async': 0
  }
};
