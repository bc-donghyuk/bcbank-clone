import { atom } from "recoil";

export type FeatureConfigState = Record<string, number> | {};

export const featureConfigState = atom<FeatureConfigState>({
  key: "featureConfigState",
  default: {},
});
