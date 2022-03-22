import React from "react";

import { Routes } from "react-router-dom";

import { routes, routeComponents } from "routes/routeConfig";

const App = () => {
  return (
    <Routes>
      {routes.map(route => {
        const RouteComponent = routeComponents[route.type];

        return (
          <RouteComponent
            key={route.path}
            path={route.path}
            element={(() => {
              const node = <route.component />;
              return node;
            })()}
          />
        );
      })}
    </Routes>
  );
};

export default App;
