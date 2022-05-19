import i18n from "i18n";

export const emailErrorMessages = {
  "any.empty": i18n.t("Email is required"),
  "string.email": i18n.t("Email is invalid"),
  taken: i18n.t("Email is already registered"),
};

export const passwordErrorMessages = {
  "any.empty": i18n.t("Password is required"),
  invalid: i18n.t("errors:Invalid Password"),
  incorrect: i18n.t("errors:Incorrect Password"),
  common: i18n.t("errors:Password is too common"),
  tooSimilar: i18n.t("signup.errmsg.toosimilaremail"),
  sequential: i18n.t("signup.errmsg_sequential_characters"),
};

export const passwordConfirmErrorMessages = {
  "any.allowOnly": i18n.t("Password confirmation must match new password"),
};

export const referralCodeErrorMessage = {
  invalid: i18n.t("errors:Invalid referral code"),
};
