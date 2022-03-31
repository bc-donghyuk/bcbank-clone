const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const Dotenv = require("dotenv-webpack");
const path = require("path");
const fs = require("fs");

const { NODE_ENV, APP_ENV, APP_REV, API_ROOT, PUBLIC_PATH, IS_KOREAN_SITE } = process.env;

const isStagingOrProduction = NODE_ENV === "production";

const entries = ["./src/index.js"];

const output = {
  path: path.resolve("dist", "static"),
  filename: "js/[name]-[hash].js", // 번들 이름
  chunkFilename: "js/[name]-[chunkhash].js", // 핫 업데이트 청크 파일 이름
  publicPath: `${PUBLIC_PATH}/static/`, // 브라우저 리소스 경로
};

const templates = JSON.parse(fs.readFileSync("src/html/templates.json").toString("utf-8"));

const devBabelPlugins = [
  "@loadable/babel-plugin", // SSR 준비를 위한 플러그인
  "@babel/plugin-syntax-dynamic-import",
  "react-hot-loader/babel",
  "@babel/plugin-syntax-flow", // 바벨 흐름 구문 분석
];

const prodBabelPlugins = [...devBabelPlugins, "transform-remove-console"];

const babelConfig = {
  test: /\.(jsx?|tsx?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader",
      options: {
        plugins: isStagingOrProduction ? prodBabelPlugins : devBabelPlugins,
      },
    },
  ],
};

const defaultPlugins = [
  new Dotenv({
    // 환경변수를 지원하고 사용자가 사용하는 것만 노출하는 보안 플러그인
    path: "./.env",
  }),
  new webpack.DefinePlugin({
    // 전역변수 사용 플러그인
    "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    "process.env.APP_ENV": JSON.stringify(APP_ENV),
    "process.env.APP_REV": JSON.stringify(APP_REV),
    "process.env.API_ROOT": JSON.stringify(API_ROOT),
    "process.env.PUBLIC_PATH": JSON.stringify(PUBLIC_PATH),
    "process.env.IS_KOREAN_SITE": JSON.stringify(IS_KOREAN_SITE),
  }),
  ...Object.entries(templates).map(values => {
    const [, data] = values;

    return new HtmlWebpackPlugin({
      // 웹팩 번들 제공 html 생성
      publicPath: output.publicPath,
      ...data,
    });
  }),
];

const devPlugins = [
  // 모든 종류의 모듈들을 런타임 시점에 업데이트
  new webpack.HotModuleReplacementPlugin(),
];

const prodPlugins = [
  new CleanWebpackPlugin({
    // 빌드 될 때마다 빌드 폴더 비움
    verbose: true,
  }),
  new ImageminWebpWebpackPlugin({
    config: [
      {
        test: /\.(jpe?g|png)/,
        options: {
          quality: 75,
        },
      },
    ],
    overrideExtension: true,
    detailedLogs: false,
    silent: false,
    strict: true,
  }),
  new CompressionPlugin({
    // 번들을 한 번 더 압축
    test: /\.js$/i,
  }),
];

const pluginList = isStagingOrProduction ? [...defaultPlugins, ...prodPlugins] : [...defaultPlugins, ...devPlugins];

const setFileLoaderOptions = fileCategory => ({
  name: resourcePath => {
    if (resourcePath.includes("fonts")) {
      return "[name].[ext]";
    }
    return "[contenthash].[ext]";
  },
  publicPath: filename => `${output.publicPath}${fileCategory}/${filename}`,
  outputPath: url => path.join(fileCategory, url),
});

const buildConfig = {
  context: __dirname, // 절대 경로 폴더
  mode: NODE_ENV,
  entry: entries,
  output,
  devtool: "hidden-source-map",
  module: {
    rules: [
      babelConfig,
      {
        test: /\.js$/,
        include: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jsx?|tsx?)$/,
        include: /node_modules/,
        use: ["react-hot-loader/webpack"],
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // eslint-disable-next-line global-require
              implementation: require("node-sass"),
            },
          },
        ],
      },
      {
        test: /\.(webp|jpg|png|jpeg)$/,
        loader: "url-loader",
        options: {
          ...setFileLoaderOptions("images"),
          limit: 5000,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: setFileLoaderOptions("fonts"),
          },
        ],
      },
    ],
  },
  plugins: pluginList, // 번들파일 관련 설정
  optimization: {},
  devServer: {
    host: "127.0.0.1",
    disableHostCheck: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".css"],
    alias: {},
  },
};

module.exports = [
  {
    name: "build",
    ...buildConfig,
  },
  {
    name: "devServer",
    ...buildConfig,
    entry: [
      "webpack-hot-middleware/client?path=http://127.0.0.1:8080/__webpack_hmr&reload=true",
      "webpack/hot/only-dev-server",
      "react-hot-loader/patch",
      ...entries,
    ],
    devtool: "source-map",
    optimization: {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    },
    output: {
      ...buildConfig.output,
      publicPath: `http://${process.env.LOCAL_IP || "127.0.0.1"}:8080/__webpack_hmr`,
    },
  },
];
