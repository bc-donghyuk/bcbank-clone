import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import smil from "modernizr-esm/feature/svg/smil";

import DesktopWrapper from "components/common/desktop/DesktopWrapper";
import UnsupportBrowserPage from "components/unsupport/UnsupportBrowserPage";

import { routes, routeComponents } from "routes/routeConfig";
import { LOGIN_URL } from "URLConstant";

const App = () => {
  if (smil) {
    return (
      <Routes>
        {
          // isLoggedIn()?
          <Route path="/" element={<Navigate replace to={LOGIN_URL} />} />
        }
        {routes.map(route => {
          const RouteComponent = routeComponents[route.type];

          return (
            <RouteComponent
              key={route.path}
              path={route.path}
              element={(() => {
                const node = <route.component />;
                if (route.fullscreen) {
                  return node;
                }
                return <DesktopWrapper>{node}</DesktopWrapper>;
              })()}
              {...route.routeProps}
            />
          );
        })}
      </Routes>
    );
  }
  return <UnsupportBrowserPage />;
};

export default App;
