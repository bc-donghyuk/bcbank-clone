import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { useTranslation } from "react-i18next";

import authService from "@core/services/authService";
import { getFeatureConfigSelector } from "@core/recoil/selectors/featureConfig/featureConfigSelector";
import { FEATURE_CONFIG__SUSPICIOUS_LOGIN } from "@core/constants/featureConfig";
import { LOGIN_OTP_URL } from "URLConstant";
import { IS_STAGING_OR_PRODUCTION } from "envConstants";
import { loginFormMethodsState } from "containers/LoginContainer";

interface AuthDeviceData {
  type: number;
  ending?: string;
}

interface loginProps {
  data: loginFormMethodsState;
  setValue: UseFormSetValue<FieldValues>;
  setLoading: (value: boolean) => void;
  setShowError: (value: boolean) => void;
  setServerErrorMessage: (value: string) => void;
}

const useLogin = () => {
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
        // TODO : verifycation
      }

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

  return { login };
};

export default useLogin;
