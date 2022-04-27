import { formMethodsProps } from "containers/LoginContainer";
import React from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "./AuthLayout";
import OtpForm from "./OtpForm";

const LoginFormOtp: React.FC<formMethodsProps> = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout title="">
      <OtpForm />
    </AuthLayout>
  );
};

export default LoginFormOtp;
