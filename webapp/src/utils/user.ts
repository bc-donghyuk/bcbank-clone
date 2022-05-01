import i18n from "i18n";
import { BCBANK_USER__TYPE_PERSONAL, BCBANK_USER__TYPE_CORPORATE } from "./../../../core/constants/user";

export const BCBANK_USER__TYPE__LABELS = (): Record<number, string> => ({
  [BCBANK_USER__TYPE_PERSONAL]: i18n.t("Personal"),
  [BCBANK_USER__TYPE_CORPORATE]: i18n.t("Corporate"),
});
