import React from "react";
import { Route, Routes } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LoginForm from "components/auth/LoginForm";
import { FormProvider, useForm, UseFormProps, FieldValues } from "react-hook-form";

const loginFormSchema = yup
  .object({
    email: yup.string().email({ minDomainAtoms: 2, message: "제대로 입력좀" }).required(),
    password: yup.string().required(),
  })
  .required();
export interface formMethodsProps {
  email: string;
  password: string;
}

const LoginContainer = () => {
  const methods = useForm<formMethodsProps>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Routes>
        <Route path="/" element={<LoginForm formMethods={methods} />} />
      </Routes>
    </FormProvider>
  );
};

export default LoginContainer;
