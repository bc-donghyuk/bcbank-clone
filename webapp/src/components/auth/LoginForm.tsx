import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

import Input from "components/common/form/Input";
import Recaptcha from "components/auth/Recaptcha";
import PasswordInput from "components/common/form/PasswordInput";
import Button from "components/common/buttons/Button";
import Snackbar from "components/common/snackbars/Snackbar";

import AuthLayout from "./AuthLayout";
import { Form, FormGroup, FormControl, FormFooter, FormFooterItem, LinkItem } from "./commonStyle";
import InputAdornment from "components/common/form/InputAdornment";
import { IS_STAGING_OR_PRODUCTION } from "envConstants";
import { LOGIN_OTP_URL, PASSWORD_CHANGE_PATH, SIGNUP_URL } from "URLConstant";
import authService from "@core/services/authService";
import { useFetchFeatureConfig } from "@core/hooks/featureConfig/useFetchFeatureConfig";

// Verification container 생성 시, 제거
interface AuthDeviceData {
  type: number;
  ending?: string;
}

const RecaptchaWrapper = styled.div``;

const ButtonWrapper = styled.div`
  margin-top: 8px;
  padding: 16px 0;
`;

const LoginForm: React.FC = () => {
  const {
    control,
    formState: { errors, dirtyFields },
    setValue,
    handleSubmit,
  } = useFormContext();
  const featureConfig = useFetchFeatureConfig();
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
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

  const isEmailValid = dirtyFields?.email && errors && !errors.email;

  const onSubmit = async (data: any) => {
    if (loading) {
      return;
    }
    setLoading(true);

    const { email, password, recapt } = data;

    try {
      const { otpEnabled, authDevices }: { otpEnabled: boolean; authDevices: AuthDeviceData[] } =
        await authService.login({ email, password, recapt });

      setLoading(false);

      const state: {
        email: string;
        password: string;
        authDevices: AuthDeviceData[];
        from?: { pathname: string; search?: string };
      } = {
        email,
        password,
        authDevices,
      };

      console.log(featureConfig);

      if (location.state) {
        if (location.state?.from) {
          state.from = location.state.from;
        }
      }

      // if (featureConfig?.isEnabled(FEATURE_CONFIG__SUSPICIOUS_LOGIN)) {
      // TODO : verifycation
      // }

      // TODO : otp
      if (otpEnabled) {
        navigate(LOGIN_OTP_URL, { state });
        return;
      }
    } catch (err) {
      setLoading(false);

      if (err.response?.status === 400) {
        setShowError(true);
        if (IS_STAGING_OR_PRODUCTION) {
          setValue("recapt", null);
          setValue("isHuman", false);
        }
        setServerErrorMessage(`${t("Invalid username or password")}`);
      }
    }
  };

  const handleCloseErrorMessage = () => {
    setShowError(false);
  };

  const handleSignupClick = () => {
    navigate(SIGNUP_URL);
  };

  const handleChangePasswordClick = () => {
    navigate(PASSWORD_CHANGE_PATH);
  };

  useEffect(() => {
    setDefaultRecapchaState();
  }, []);

  return (
    <AuthLayout title={t("Welcome Back")}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControl>
            <Input
              name="email"
              control={control}
              placeholder={t("Email")}
              endAdornment={<InputAdornment position="end" isValid={isEmailValid} />}
            />
          </FormControl>
          <FormControl>
            <PasswordInput
              name="password"
              control={control}
              error={errors.password?.message}
              placeholder={t("Password")}
            />
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
          <LinkItem onClick={handleChangePasswordClick}>{t("Reset Password")}</LinkItem>
        </FormFooterItem>
      </FormFooter>
      <Snackbar theme="error" open={showError} message={serverErrorMessage} onClose={handleCloseErrorMessage} />
    </AuthLayout>
  );
};

export default LoginForm;
