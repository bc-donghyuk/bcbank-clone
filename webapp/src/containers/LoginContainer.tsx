import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "components/auto/LoginForm";

const LoginContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
    </Routes>
  );
};

export default LoginContainer;
