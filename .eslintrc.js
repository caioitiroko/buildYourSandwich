module.exports = {
  env: {
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    it: false,
    fetch: false,
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
    "import/prefer-default-export": "off",
    "quotes": [
      "error",
      "double"
    ],
    "react/jsx-filename-extension": [
      "warn",
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
  overrides: [
    {
      "files": [
        "src/sagas/*.js",
        "src/sagas/**/*.js"
      ],
      "rules": {
        "func-names": "off"
      }
    }
  ]
};
