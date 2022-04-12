import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { Controller, useForm, useFormContext, UseFormReturn } from "react-hook-form";

import Input from "components/common/form/Input";
import PasswordInput from "components/common/form/PasswordInput";

import { formMethodsProps } from "containers/LoginContainer";
import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl } from "./commonStyle";
import AuthIcon from "assets/icons/AuthIcon";

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const ButtonWrapper = styled.div``;

interface Props {
  formMethods: UseFormReturn<formMethodsProps>;
}

const LoginForm: React.FC<Props> = ({ formMethods }) => {
  const { control } = useFormContext();
  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout title={t("Welcome Back")}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControl>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  field={field}
                  placeholder={t("email")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconWrapper>
                        {/* <AuthIcon type={isEmailValid() ? "checkOn" : "checkOff"} /> */}
                        <AuthIcon type={"checkOn"} />
                      </IconWrapper>
                    </InputAdornment>
                  }
                />
              )}
            />
          </FormControl>
          <FormControl>
            <Controller
              name="password"
              control={control}
              render={({ field }) => <PasswordInput field={field} placeholder={t("Password")} />}
            />
          </FormControl>
        </FormGroup>
        <ButtonWrapper>
          <button>{t("Sign In")}</button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
