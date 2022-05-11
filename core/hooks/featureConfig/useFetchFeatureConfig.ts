import { selector, useRecoilValue } from "recoil";

import { fetchFeatureConfig } from "services/fetchData";

const fetchFeatureConfigSelector = selector({
  key: "fetchFeatureConfig",
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

export const useFetchFeatureConfig = () => useRecoilValue(fetchFeatureConfigSelector);
