import React from "react";
import { Route, Routes } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import LoginForm from "components/auth/LoginForm";
import { FormProvider, useForm, UseFormProps, FieldValues } from "react-hook-form";
import { passwordErrorMessage } from "constants/errorMessage";

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
        <Route path="/" element={<LoginForm formMethods={methods} />} />
      </Routes>
    </FormProvider>
  );
};

export default LoginContainer;
