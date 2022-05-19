const cors = require("cors");
const express = require("express");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const { createProxyMiddleware } = require("http-proxy-middleware");
const middleware = require("webpack-dev-middleware");

const fs = require("fs");

const config = require("./webpack.config").find(config => config.name === "devServer");

require("dotenv").config({ path: ".env" });

(() => {
  const app = express();
  const compiler = webpack(config);

  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:8000",
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {
        "^/api": "",
      },
      cookiePathRewrite: {
        "/auth/token/refresh/": "/api/auth/token/refresh/",
      },
    }),
  );

  app.use(cors());

  app.use(
    middleware(compiler, {
      publicPath: config.output.publicPath,
      writeToDisk: true,
    }),
  );

  app.use(require("webpack-hot-middleware")(compiler));
  app.use("/static", express.static("resources/static"));
  app.use("/static", express.static("dist/static"));

  app.use("/", (req, res) => {
    fs.readFile("dist/static/html/index.html", (error, data) => {
      if (error) {
        // console.log(error);
        return res.status(500).send(JSON.stringify(error));
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  });

  app.listen(8080, "0.0.0.0", function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Listening at http://127.0.0.1:8080");
  });
})();
