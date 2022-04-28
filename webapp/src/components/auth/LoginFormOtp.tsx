import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import AuthLayout from "./AuthLayout";
import OtpForm from "./OtpForm";

const LoginFormOtp: React.FC = () => {
  const navigate = useNavigate();
  const { getValues } = useFormContext();

  return (
    <AuthLayout>
      <OtpForm />
    </AuthLayout>
  );
};

export default LoginFormOtp;
