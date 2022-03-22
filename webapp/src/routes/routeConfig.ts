import React from "react";
import { Route } from "react-router-dom";

import LoginContainer from "containers/LoginContainer";
import HomeContainer from "containers/HomeContainer";

interface iRoute {
  type: "public";
  path?: string;
  component: React.ComponentType;
}

const routeComponents = {
  public: Route,
};

const routes: iRoute[] = [
  {
    path: "/",
    type: "public",
    component: HomeContainer,
  },
  {
    path: "/login",
    type: "public",
    component: LoginContainer,
  },
];

export { routes, routeComponents };
