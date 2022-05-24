import { emailErrorMessages, passwordErrorMessages } from "constants/errorMessage";
import * as yup from "yup";

export const emailSchema = yup
  .string()
  .email(emailErrorMessages["string.email"])
  .matches(/^(?!.*@(daum.net|hanmail.net)$).*$/)
  .required(emailErrorMessages["any.empty"]);

export const passwordSchema = yup
  .string()
  .min(10, "string.min")
  .max(30, "string.max")
  .matches(/[0-9]+/, "numbers")
  .matches(/[a-zA-Z]+/, "characters")
  .required(passwordErrorMessages["any.empty"]);
