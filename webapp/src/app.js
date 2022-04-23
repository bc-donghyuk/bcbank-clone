import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import smil from "modernizr-esm/feature/svg/smil";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

import DesktopWrapper from "components/common/desktop/DesktopWrapper";
import UnsupportBrowserPage from "components/unsupport/UnsupportBrowserPage";

import { routes, routeComponents } from "routes/routeConfig";
import { DASHBOARD_URL, LOGIN_URL } from "URLConstant";
import MuiTheme from "styles/theme";
import Services from "services";
import { isLoggedIn } from "utils/auth";
import { store } from "features/store";

const App = () => {
  if (smil) {
    return (
      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          <Routes>
            {isLoggedIn() ? (
              <Route path="/" element={<Navigate replace to={DASHBOARD_URL} />} />
            ) : (
              <Route path="/" element={<Navigate replace to={LOGIN_URL} />} />
            )}
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
        </ThemeProvider>
      </Provider>
    );
  }
  return <UnsupportBrowserPage />;
};

Services.configure();

export default App;
