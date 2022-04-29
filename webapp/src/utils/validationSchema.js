import * as yup from "yup";

export const EmailSchema = yup
  .string()
  .email({ minDomainAtoms: 2 })
  .matches(/^(?!.*@(daum.net|hanmail.net)$).*$/)
  .required();

export const passwordSchema = yup
  .string()
  .min(10)
  .max(30)
  .matches(/[0-9]+/, "numbers")
  .matches(/[a-zA-Z]+/, "characters")
  .required();
