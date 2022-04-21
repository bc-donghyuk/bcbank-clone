import React from "react";
import { Navigate } from "react-router-dom";

import { LOGIN_URL } from "URLConstant";
import { isLoggedIn as checkLogIn } from "utils/auth";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = checkLogIn();

  return isLoggedIn ? children : <Navigate to={LOGIN_URL} replace />;
};

export default PrivateRoute;
