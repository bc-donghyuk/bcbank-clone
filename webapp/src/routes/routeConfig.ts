import React from "react";

import customLoadable from "./customLoadable";
import PrivateRoute from "./PrivateRoute";

const LoginContainer = customLoadable(() => import("containers/LoginContainer"));
const SignupContainer = customLoadable(() => import("containers/SignupContainer"));
const PasswordChangeContainer = customLoadable(() => import("containers/PasswordChangeContainer"));
const DashboardContainer = customLoadable(() => import("containers/DashboardContainer"));
interface IRoute {
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

const routes: IRoute[] = [
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
    path: "/password-change/*",
    type: "public",
    component: PasswordChangeContainer,
  },
  {
    path: "/dashboard/*",
    type: "private",
    component: DashboardContainer,
  },
];

export { routes, routeComponents };
