import authService from "@core/services/authService";
import { setLoggedIn } from "utils/auth";

const onLogInStart = async () => {
  setLoggedIn(false);
};

const onLoggedIn = async () => {
  setLoggedIn(true);
};

const onLoggedOut = async () => {
  setLoggedIn(false);
};

const configure = () => {
  authService.addCallback("onLogInStart", onLogInStart);
  authService.addCallback("onLoggedIn", onLoggedIn);
  authService.addCallback("onLoggedOut", onLoggedOut);
};

export default {
  configure,
};
