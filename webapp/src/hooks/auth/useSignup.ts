import { useLocation, useNavigate } from "react-router-dom";
import authService, { SignupProps } from "@core/services/authService";
import { HOME_URL } from "URLConstant";

interface signupProps {
  data: SignupProps;
  setLoading: (value: boolean) => void;
}

const useSignup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const signup = async ({ data, setLoading }: signupProps) => {
    const { email, password, passwordConfirmation, usertype, referralCode } = data;
    try {
      setLoading(false);
      await authService.signup({ email, password, passwordConfirmation, usertype, referralCode });

      const { state } = location;
      const targetIUrl = state ? state.from.pathname : HOME_URL;
    } catch (err) {
      setLoading(false);
    }
  };

  return { signup };
};

export default useSignup;
