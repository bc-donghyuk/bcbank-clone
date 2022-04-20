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

async function login({ email, password, recapt, otpToken }) {
  http.removeAccessToken();

  const payload: LoginPayload = { email, password };
  if (recapt) {
    payload.recapt = recapt;
  }

  const { data } = await http.post(AUTH_LOGIN_ENDPOINT, payload);

  console.log("core/authService", data);
}

export default {
  login,
};
