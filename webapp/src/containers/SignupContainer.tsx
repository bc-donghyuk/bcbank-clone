import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import SignupForm from "components/auth/SignupForm";
import { BCBANK_USER__TYPE_PERSONAL } from "@core/constants/user";
import { EmailSchema, passwordSchema } from "utils/validationSchema";
import { passwordConfirmErrorMessages } from "constants/errorMessage";

interface Props {}

interface signupFormMethodsState {
  email: string;
  password: string;
  passwordConfirmation: string;
  referralCode: string;
  userType: number;
}

const signupFormSchema = yup.object({
  email: EmailSchema,
  password: passwordSchema,
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], passwordConfirmErrorMessages["any.allowOnly"])
    .required(""),
  referralCode: yup
    .string()
    .max(32)
    .matches(/^[a-zA-Z]*$/),
  userType: yup.number(),
});

const SignupContainer: React.FC<Props> = () => {
  const method = useForm<signupFormMethodsState>({
    mode: "onChange",
    resolver: yupResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
      referralCode: "",
      userType: BCBANK_USER__TYPE_PERSONAL,
    },
  });

  return (
    <FormProvider {...method}>
      <SignupForm />
    </FormProvider>
  );
};

export default SignupContainer;
