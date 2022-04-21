import React from "react";
import { Route } from "react-router-dom";

import customLoadable from "./customLoadable";
import PrivateRoute from "./PrivateRoute";

const LoginContainer = customLoadable(() => import("containers/LoginContainer"));
const DashboardContainer = customLoadable(() => import("containers/DashboardContainer"));
interface iRoute {
  type: "public" | "private";
  path?: string;
  component: React.ComponentType;
  fullscreen?: boolean;
  routeProps?: { [key: string]: any };
}

const routeComponents = {
  public: React.Fragment,
  private: PrivateRoute,
};

const routes: iRoute[] = [
  {
    path: "/login/*",
    type: "public",
    component: LoginContainer,
  },
  {
    path: "/dashboard/*",
    type: "private",
    component: DashboardContainer,
  },
];

export { routes, routeComponents };
