import i18n from "i18n";

const passwordRequirements = [
  { key: "string.min", message: i18n.t("At least 10 characters") },
  { key: "string.max", message: i18n.t("At most 30 characters") },
  {
    key: "characters",
    message: i18n.t("At least one letter"),
  },
  { key: "numbers", message: i18n.t("At least one number") },
];

export { passwordRequirements };
