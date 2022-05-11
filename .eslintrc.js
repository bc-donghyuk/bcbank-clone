module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard",
    "prettier/unicorn",
  ],
  plugins: ["eslint-comments", "react", "react-hooks", "jest", "import"],
  env: {
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },

  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "babel-eslint",
      plugins: ["flowtype"],
      rules: {
        "flowtype/define-flow-type": 1,
        "flowtype/use-flow-type": 1,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/camelcase": "off",
      },
    },
  ],
};
