import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { useFormContext, UseFormReturn } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Input from "components/common/form/Input";
import Recaptcha from "components/auth/Recaptcha";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";

import authService from "@core/services/authService";
import { formMethodsProps } from "containers/LoginContainer";
import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl } from "./commonStyle";
import AuthIcon from "assets/icons/AuthIcon";
import { IS_STAGING_OR_PRODUCTION } from "envConstants";

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
  let navigate = useNavigate();
  const {
    control,
    formState: { errors, dirtyFields },
    setValue,
  } = useFormContext();
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);

  const onChangeRecapt = (token: string) => {
    setValue("recapt", token);
    setValue("isHuman", true);
  };

  const setDefaultRecapchaState = () => {
    if (!IS_STAGING_OR_PRODUCTION) {
      setValue("recapt", "");
      setValue("isHuman", true);
    }
  };

  const onSubmit = async (data: any) => {
    try {
      // const temp = await authService.login(data);
      // navigate("/");
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    setDefaultRecapchaState();
  }, []);
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
        {IS_STAGING_OR_PRODUCTION && (
          <RecaptchaWrapper>
            <Recaptcha onChange={onChangeRecapt} />
          </RecaptchaWrapper>
        )}
        <ButtonWrapper>
          <Button fullWidth theme="primary" size="large" type="submit" loading={loading}>
            {t("Sign In")}
          </Button>
        </ButtonWrapper>
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
