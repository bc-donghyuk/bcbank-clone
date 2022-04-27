import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";

import LoginForm from "components/auth/LoginForm";

import { passwordErrorMessage } from "constants/errorMessage";
import { isLoggedIn } from "utils/auth";
import { DASHBOARD_URL } from "URLConstant";
import HaruSuspense from "components/HaruSuspense";

const loginFormSchema = yup
  .object({
    email: yup.string().email({ minDomainAtoms: 2 }).required(),
    password: yup.string().required(passwordErrorMessage["any.empty"]),
    isHuman: yup.boolean().required().oneOf([true]),
    recapt: yup.string().nullable(),
  })
  .required();
export interface formMethodsProps {
  email: string;
  password: string;
  isHuman: boolean;
  recapt: string | null;
}

const LoginContainer = () => {
  const methods = useForm<formMethodsProps>({
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
        <Route
          path="/"
          element={
            <HaruSuspense>
              <LoginForm formMethods={methods} />
            </HaruSuspense>
          }
        />
      </Routes>
    </FormProvider>
  );
};

export default LoginContainer;
