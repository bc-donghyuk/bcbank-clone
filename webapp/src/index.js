import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app";
// IE11 브라우저를 위한 바벨 폴리필
import "core-js/stable";
import "regenerator-runtime/runtime";

import "./i18n";
import "css/reset.scss";
import "css/global.scss";

const container = document.getElementById("app");

const root = ReactDOMClient.createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

if (module.hot) {
  module.hot.accept();
}

// TODO : Lerna + Monorepo + yarn v2로 패키지 관리하기
