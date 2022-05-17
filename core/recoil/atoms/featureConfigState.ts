import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { FeatureConfig } from "models/IFeatureConfig";
import { fetchFeatureConfig } from "services/fetchData";

export const featureConfigState = atom<FeatureConfig>({
  key: "featureConfigState",
  default: new FeatureConfig(),
});

export const useFeatureConfig = () => useRecoilValue(featureConfigState);

export function useFetchFeatureConfig() {
  const dispatch = useSetRecoilState(featureConfigState);
  return useCallback(async () => {
    try {
      const response = await fetchFeatureConfig();

      dispatch(response);
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);
}
