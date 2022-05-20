import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import smil from "modernizr-esm/feature/svg/smil";
import { ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";
import { hot } from "react-hot-loader";

import DesktopWrapper from "components/common/desktop/DesktopWrapper";
import UnsupportBrowserPage from "components/unsupport/UnsupportBrowserPage";
import ErrorBoundary from "components/common/ErrorBoundary";
import GlobalDrawer from "components/common/GlobalDrawer";

import HaruQueriesClientProvider from "@core/queries/HaruQueriesClientProvider";
import DebugObserver from "@core/recoil/DebugObserver";
import { routes, routeComponents } from "routes/routeConfig";
import { DASHBOARD_URL, LOGIN_URL } from "URLConstant";
import MuiTheme from "styles/theme";
import Services from "services";
import { isLoggedIn } from "utils/auth";

const App = () => {
  if (smil) {
    return (
      <ErrorBoundary>
        <ThemeProvider theme={MuiTheme}>
          <HaruQueriesClientProvider>
            <RecoilRoot>
              <DebugObserver />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navigate replace to={isLoggedIn() ? DASHBOARD_URL : LOGIN_URL} />} />
                  {routes.map(route => {
                    const RouteTypeHandler = routeComponents[route.type];
                    const node = <route.component />;

                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={
                          <RouteTypeHandler>
                            {route.fullscreen ? node : <DesktopWrapper>{node}</DesktopWrapper>}
                          </RouteTypeHandler>
                        }
                      />
                    );
                  })}
                </Routes>
              </BrowserRouter>
              <GlobalDrawer />
            </RecoilRoot>
          </HaruQueriesClientProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );
  }
  return <UnsupportBrowserPage />;
};

Services.configure();

export default hot(module)(App);
