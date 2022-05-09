import { atom } from "recoil";

export type IFeatureConfigData = Record<string, number> | {};

export const featureConfigState = atom<IFeatureConfigData>({
  key: "featureConfigState",
  default: {},
});
