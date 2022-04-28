import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";

import Input from "components/common/form/Input";
import Recaptcha from "components/auth/Recaptcha";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";
import Snackbar from "components/common/snackbars/Snackbar";

import { formMethodsProps } from "containers/LoginContainer";
import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl, FormFooter, FormFooterItem, LinkItem } from "./commonStyle";
import AuthIcon from "assets/icons/AuthIcon";
import { IS_STAGING_OR_PRODUCTION } from "envConstants";
import useFetchLogin from "hooks/auth/useFetchLogin";
import { useNavigate } from "react-router-dom";

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const RecaptchaWrapper = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 8px;
  padding: 16px 0;
`;

const LoginForm: React.FC<formMethodsProps> = ({ formMethods }) => {
  const {
    control,
    formState: { errors, dirtyFields },
    setValue,
  } = useFormContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useFetchLogin();
  const [loading, setLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  const onChangeRecapt = (token: string) => {
    setValue("recapt", token);
    setValue("isHuman", true);
  };

  const setDefaultRecapchaState = () => {
    if (!IS_STAGING_OR_PRODUCTION) {
      setValue("recapt", "");
      setValue("isHuman", true);
      // TODO : remove temp setState
      setValue("email", "piouy_@blockcrafters.com");
      setValue("password", "pqowie001!");
    }
  };

  const onSubmit = async (data: any) => {
    if (loading) {
      return;
    }
    setLoading(true);
    await login({
      data,
      setValue,
      setLoading,
      setShowError,
      setServerErrorMessage,
    });
  };

  const handleCloseErrorMessage = () => {
    setShowError(false);
  };

  const handleSignupClick = () => {
    navigate("/signup");
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
      <FormFooter>
        <FormFooterItem>
          {t("Don't have an account yet?")}&nbsp;<LinkItem onClick={handleSignupClick}>{t("Sign up")}</LinkItem>
        </FormFooterItem>
        <FormFooterItem>
          {t("Forgot your password?")}&nbsp;
          <LinkItem onClick={() => {}}>{t("Reset Password")}</LinkItem>
        </FormFooterItem>
      </FormFooter>
      <Snackbar theme="error" open={showError} message={serverErrorMessage} onClose={handleCloseErrorMessage} />
    </AuthLayout>
  );
};

export default LoginForm;
