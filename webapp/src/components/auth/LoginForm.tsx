import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { useFormContext, UseFormReturn } from "react-hook-form";

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
    formState: { errors, dirtyFields },
    setValue,
  } = useFormContext();
  const { t } = useTranslation();

  const onChangeRecapt = (token: string) => {
    setValue("recapt", token);
    setValue("isHuman", true);
  };

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
              placeholder={t("Email")}
              endAdornment={
                <InputAdornment position="end">
                  <IconWrapper>
                    <AuthIcon type={dirtyFields?.email && errors && !errors.email ? "checkOn" : "checkOff"} />
                  </IconWrapper>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl>
            <PasswordInput name="password" control={control} error={errors} placeholder={t("Password")} />
          </FormControl>
        </FormGroup>
        <RecaptchaWrapper>
          <Recaptcha onChange={onChangeRecapt} />
        </RecaptchaWrapper>
        <ButtonWrapper>
          <Button fullWidth theme="primary" size="large" type="submit">
            {t("Sign In")}
          </Button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
