import http from "./httpService";
import { AUTH_LOGIN_ENDPOINT } from "../constants/apiURIs";

interface LoginProps {
  email: string;
  password: string;
  recapt?: string;
  otpToken?: string;
}
interface LoginPayload {
  email: string;
  password: string;
  recapt?: string;
  token?: string;
}

type AuthEventType = "onLogInStart" | "onLoggedIn" | "onLoggedOut";

type AuthEvent = { type: "onLogInStart" } | { type: "onLoggedIn" } | { type: "onLoggedOut" };

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

  console.log(data);
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

export default {
  addCallback,
  login,
};
