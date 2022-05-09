module.exports = {
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            useBuiltIns: "entry",
            corejs: 3,
          },
        ],
        "@babel/preset-flow",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    },
  },
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    "@babel/preset-flow",
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@emotion/babel-preset-css-prop",
  ],
  plugins: [
    [
      "module-resolver",
      {
        extensions: ["*", ".ts", ".js", ".tsx", ".jsx"],
        root: ["./src", "../core", "../design"],
        alias: {
          "@core": "../core/",
          "@shared-components": "../shared-components/src",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-syntax-flow"],
  ],
};
