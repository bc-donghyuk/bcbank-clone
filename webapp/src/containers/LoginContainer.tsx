import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";

import LoginForm from "components/auth/LoginForm";
import HaruSuspense from "components/HaruSuspense";
import LoginFormOtp from "components/auth/LoginFormOtp";

import { passwordErrorMessage } from "constants/errorMessage";
import { isLoggedIn } from "utils/auth";
import { DASHBOARD_URL, OTP_URL } from "URLConstant";

const loginFormSchema = yup
  .object({
    email: yup.string().email({ minDomainAtoms: 2 }).required(),
    password: yup.string().required(passwordErrorMessage["any.empty"]),
    isHuman: yup.boolean().required().oneOf([true]),
    recapt: yup.string().nullable(),
  })
  .required();
interface loginFormMethodsState {
  email: string;
  password: string;
  isHuman: boolean;
  recapt: string | null;
}

const LoginContainer = () => {
  const methods = useForm<loginFormMethodsState>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      isHuman: false,
      recapt: null,
    },
    mode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <Routes>
        {isLoggedIn() && <Route path="/" element={<Navigate replace to={DASHBOARD_URL} />} />}
        <Route path={OTP_URL} element={<LoginFormOtp />} />
        <Route
          path="/"
          element={
            <HaruSuspense>
              <LoginForm />
            </HaruSuspense>
          }
        />
      </Routes>
    </FormProvider>
  );
};

export default LoginContainer;
