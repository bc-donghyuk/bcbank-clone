import { selector } from "recoil";

import { FEATURE_CONFIGS_API_ENDPOINT } from "../../../constants/apiURIs";
import userService from "../../../services/userService";
import { featureConfigState } from "../../../recoil/atoms/featureConfig";

export const getFeatureConfigSelector = selector({
  key: FEATURE_CONFIGS_API_ENDPOINT,
  get: async () => {
    try {
      const response = await userService.fetchFeatureConfigs();

      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
  set: ({ set }, newValue) => {
    set(featureConfigState, newValue);
  },
});
