import { selector, useRecoilValue } from "recoil";

import { fetchFeatureConfig } from "services/fetchData";

const featureConfigAsyncState = selector({
  key: "featureConfigAsyncState",
  get: async () => {
    try {
      const response = await fetchFeatureConfig();

      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
});

export const useFetchFeatureConfig = () => useRecoilValue(featureConfigAsyncState);
