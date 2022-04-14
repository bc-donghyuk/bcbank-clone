import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { Controller, useForm, useFormContext, UseFormReturn } from "react-hook-form";

import Input from "components/common/form/Input";
import Recaptcha from "components/auth/Recaptcha";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";

import { formMethodsProps } from "containers/LoginContainer";
import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl } from "./commonStyle";
import AuthIcon from "assets/icons/AuthIcon";

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const RecaptchaWrapper = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

interface Props {
  formMethods: UseFormReturn<formMethodsProps>;
}

const LoginForm: React.FC<Props> = ({ formMethods }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();
  const { t } = useTranslation();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout title={t("Welcome Back")}>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControl>
            <Input
              name="email"
              control={control}
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
          </FormControl>
          <FormControl>
            <PasswordInput
              name="password"
              control={control}
              error={errors}
              errorMessage="다시 입력해주세요."
              placeholder={t("Password")}
            />
          </FormControl>
        </FormGroup>
        <RecaptchaWrapper>
          <Recaptcha />
        </RecaptchaWrapper>
        <ButtonWrapper>
          <Button fullWidth theme="primary" size="large" type="submit" onClick={() => {}}>
            {t("Sign In")}
          </Button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
