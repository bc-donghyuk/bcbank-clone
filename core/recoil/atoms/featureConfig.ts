import { atom } from "recoil";

export type featureConfigData = Record<string, number> | {};

export const featureConfigState = atom({
  key: "featureConfigState",
  default: {} as featureConfigData,
});
