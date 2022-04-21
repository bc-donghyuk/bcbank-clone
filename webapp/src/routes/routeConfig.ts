import React from "react";
import { Route } from "react-router-dom";

import customLoadable from "./customLoadable";

const LoginContainer = customLoadable(() => import("containers/LoginContainer"));
const DashboardContainer = customLoadable(() => import("containers/DashboardContainer"));
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
    path: "/dashboard/*",
    type: "public",
    component: DashboardContainer,
  },
];

export { routes, routeComponents };
