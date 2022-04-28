import React from "react";
import { Route } from "react-router-dom";

import customLoadable from "./customLoadable";
import PrivateRoute from "./PrivateRoute";

const LoginContainer = customLoadable(() => import("containers/LoginContainer"));
const SignupContainer = customLoadable(() => import("containers/SignupContainer"));
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
    path: "/signup/*",
    type: "public",
    component: SignupContainer,
  },
  {
    path: "/dashboard/*",
    type: "private",
    component: DashboardContainer,
  },
];

export { routes, routeComponents };
