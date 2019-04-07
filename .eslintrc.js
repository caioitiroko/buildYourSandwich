module.exports = {
  env: {
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    it: false,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    'react',
  ],
  rules: {
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/sort-prop-types": [
      "warn",
      {
        "callbacksLast": true
      }
    ],
    "strict": [
      "error",
      "global"
    ]
  },
};
