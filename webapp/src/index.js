import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "app";

import "css/reset.scss";
import "css/global.scss";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
