import http from "services/httpService";
import { AUTH_LOGIN_ENDPOINT, AUTH_SIGNUP_ENDPOINT } from "constants/apiURIs";

export interface LoginProps {
  email: string;
  password: string;
  recapt: string | null;
  otpToken?: string;
}
interface LoginPayload {
  email: string;
  password: string;
  recapt?: string;
  token?: string;
}

export interface SignupProps {
  email: string;
  password: string;
  passwordConfirmation: string;
  usertype: number;
  referralCode?: string;
}

type AuthEventType = "onLogInStart" | "onLoggedIn" | "onLoggedOut" | "onSignupStart" | "onSignedupWithReferralCode";

type AuthEvent =
  | { type: "onLogInStart" }
  | { type: "onLoggedIn" }
  | { type: "onLoggedOut" }
  | { type: "onSignupStart" }
  | { type: "onSignedupWithReferralCode"; referralCode: string; referralType: number };

const authCallbacks: { type: AuthEventType; callback: Function }[] = [];

const addCallback = (type: AuthEventType, callback: Function) => {
  authCallbacks.push({ type, callback });
};

const dispatch = ({ type, ...rest }: AuthEvent) => {
  const callbacks = authCallbacks.filter(({ type: _type }) => _type === type);
  callbacks.forEach(async ({ type, callback }) => {
    await callback(rest);
  });
};

async function login({ email, password, recapt, otpToken }: LoginProps) {
  dispatch({ type: "onLogInStart" });
  http.removeAccessToken();

  const payload: LoginPayload = { email, password };
  if (recapt) {
    payload.recapt = recapt;
  }

  const { data } = await http.post(AUTH_LOGIN_ENDPOINT, payload);

  handleLogin(data);

  return { otpEnabled: !!data.otp_enabled, authDevices: data.auth_devices };
}

function handleLogin(data: any) {
  if (!http.checkAndUpdateAccessToken(data?.access_token)) {
    return false;
  }

  dispatch({ type: "onLoggedIn" });
  return true;
}

async function signup(values: SignupProps) {
  dispatch({ type: "onSignupStart" });

  const { email, password, passwordConfirmation, usertype, referralCode } = values;

  const { data } = await http.post(AUTH_SIGNUP_ENDPOINT, {
    email,
    password,
    passwordConfirmation,
    usertype,
    referral_code: referralCode,
  });

  if (referralCode) {
    dispatch({
      type: "onSignedupWithReferralCode",
      referralCode,
      referralType: parseInt(data.referral_type, 10),
    });
  }
  handleLogin(data);
}

export default {
  addCallback,
  login,
  signup,
};
