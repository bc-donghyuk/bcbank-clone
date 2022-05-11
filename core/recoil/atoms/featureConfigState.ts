import { atom, useRecoilValue } from "recoil";
import { FeatureConfig } from "models/IFeatureConfig";

export const featureConfigState = atom<FeatureConfig>({
  key: "featureConfigState",
  default: new FeatureConfig(),
});

export const useFeatureConfig = () => useRecoilValue(featureConfigState);
