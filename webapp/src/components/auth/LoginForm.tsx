import React from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { Controller, useForm, useFormContext, UseFormReturn } from "react-hook-form";

import Input from "components/common/form/Input";
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

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

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
            <PasswordInput name="password" control={control} placeholder={t("Password")} />
          </FormControl>
        </FormGroup>
        <ButtonWrapper>
          {/* <Button type="submit" fullWidth theme="primary" size="large" onClick={() => {}}>
            {t("Sign In")}
          </Button> */}
          <button type="submit">{t("Sign In")}</button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
