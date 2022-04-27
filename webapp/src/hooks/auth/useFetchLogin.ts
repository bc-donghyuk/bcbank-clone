import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { useTranslation } from "react-i18next";

import authService, { LoginProps } from "@core/services/authService";
import { getFeatureConfigSelector } from "@core/recoil/selectors/featureConfig/featureConfigSelector";
import { FEATURE_CONFIG__SUSPICIOUS_LOGIN } from "@core/constants/featureConfig";
import { LOGIN_OTP_URL } from "URLConstant";
import { IS_STAGING_OR_PRODUCTION } from "envConstants";

interface AuthDeviceData {
  type: number;
  ending?: string;
}

interface loginProps {
  data: LoginProps;
  setValue: UseFormSetValue<FieldValues>;
  setLoading: (value: boolean) => void;
  setShowError: (value: boolean) => void;
  setServerErrorMessage: (value: string) => void;
}

const useFetchLogin = () => {
  const featureConfig = useRecoilValue(getFeatureConfigSelector);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const login = async ({ data, setValue, setLoading, setShowError, setServerErrorMessage }: loginProps) => {
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

      if (featureConfig?.isEnabled(FEATURE_CONFIG__SUSPICIOUS_LOGIN)) {
      }

      // TODO : verifycation

      // TODO : otp
      if (otpEnabled) {
        navigate(LOGIN_OTP_URL, { state });
        return;
      }
    } catch (err) {
      setLoading(false);

      // TODO : 왜 catch에서  err.response를 따져 검증페이지로 이동시키는지 생각해보고 적용하기
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

  return { login };
};

export default useFetchLogin;
