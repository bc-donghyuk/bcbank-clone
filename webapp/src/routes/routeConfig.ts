import React from "react";
import { Route } from "react-router-dom";

import customLoadable from "./customLoadable";

const LoginContainer = customLoadable(() => import("containers/LoginContainer"));
const TestContainer = customLoadable(() => import("containers/TestContainer"));
interface iRoute {
  type: "public";
  path?: string;
  component: React.ComponentType;
  fullscreen?: boolean;
  routeProps?: { [key: string]: any };
}

const routeComponents = {
  public: Route,
};

const routes: iRoute[] = [
  {
    path: "/login/*",
    type: "public",
    component: LoginContainer,
  },
  {
    path: "/test/*",
    type: "public",
    component: TestContainer,
  },
];

export { routes, routeComponents };
