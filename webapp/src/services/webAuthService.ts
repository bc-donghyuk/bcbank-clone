import authService from "@core/services/authService";
import { setLoggedIn } from "utils/auth";
import { setRefCode, unsetRefCode } from "./refCodeService";

const onLogInStart = async () => {
  setLoggedIn(false);
};

const onLoggedIn = async () => {
  setLoggedIn(true);
};

const onLoggedOut = async () => {
  setLoggedIn(false);
};

const onSignupStart = async () => {
  unsetRefCode();
};

const onSignedUpWithReferralCode = async ({
  referralCode,
  referralType,
}: {
  referralCode: string;
  referralType: number;
}) => {
  setRefCode(referralCode, referralType);
};

const configure = () => {
  authService.addCallback("onLogInStart", onLogInStart);
  authService.addCallback("onLoggedIn", onLoggedIn);
  authService.addCallback("onLoggedOut", onLoggedOut);
  authService.addCallback("onSignupStart", onSignupStart);
  authService.addCallback("onSignUpCompleteWithReferralCode", onSignedUpWithReferralCode);
};

export default {
  configure,
};
