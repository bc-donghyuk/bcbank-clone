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
  ],
  plugins: [
    [
      "module-resolver",
      {
        extensions: ["*", ".ts", ".js", ".tsx", ".jsx"],
        root: ["./src"],
        alias: {},
      },
    ],
  ],
};
