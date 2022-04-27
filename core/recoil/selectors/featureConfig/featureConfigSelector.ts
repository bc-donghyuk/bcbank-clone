import { selector } from "recoil";

import { FEATURE_CONFIGS_API_ENDPOINT } from "../../../constants/apiURIs";
import userService from "../../../services/userService";
import { featureConfigData, featureConfigState } from "../../../recoil/atoms/featureConfig";

class FeatureConfigs {
  readonly data: featureConfigData;

  constructor(featureConfigs: featureConfigData) {
    this.data = featureConfigs || {};

    // TODO : IS_KOREAN_SITE core에서 어떻게 받아올지 고민
    // if (IS_KOREAN_SITE) {
    // delete this.data[FEATURE_CONFIG__SWITCH_INSTANT_EXCHANGE];
    // delete this.data[FEATURE_CONFIG__SWITCH_USE_PHASE_2];
    // }
  }

  isEnabled(name: string): boolean {
    return this.data && this.data[name] !== undefined;
  }

  getValue(name: string): number | undefined {
    return this.data ? this.data[name] : undefined;
  }

  get fetched(): boolean {
    return Object.keys(this.data).length > 0;
  }
}

export const getFeatureConfigSelector = selector({
  key: FEATURE_CONFIGS_API_ENDPOINT,
  get: async () => {
    try {
      const response = await userService.fetchFeatureConfigs();

      return new FeatureConfigs(response.data);
    } catch (err) {
      console.log(err);
    }
  },
  set: ({ set }, newValue) => {
    set(featureConfigState, newValue);
  },
});
