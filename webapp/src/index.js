import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "app";

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
