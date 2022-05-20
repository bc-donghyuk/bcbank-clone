module.exports = {
  env: {
    browser: true,
  },
  rules: {
    "import/no-extraneous-dependencies": [
      2,
      {
        devDependencies: true,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      // import 별칭 에러 관리
      node: {
        paths: ["webapp/src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      "eslint-import-resolver-custom-alias": {
        alias: {
          "@shared-components": "shared-components/src",
          "@core": "core",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        packages: ["shared-components/*"],
      },
    },
  },
};
