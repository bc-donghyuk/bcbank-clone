import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "features/rootReducer";

// Define a type for the slice state
interface featureConfigState {
  readonly featureConfigs: FeatureConfigs;
  inProgress: boolean;
  succeeded: boolean;
  failed: boolean;
}

type FeatureConfigData = Record<string, number>;

class FeatureConfigs {
  readonly data: FeatureConfigData;

  constructor(featureConfigs?: FeatureConfigData) {
    this.data = featureConfigs || {};

    // if (IS_KOREAN_SITE) {
    //   delete this.data[FEATURE_CONFIG__SWITCH_INSTANT_EXCHANGE];
    //   delete this.data[FEATURE_CONFIG__SWITCH_USE_PHASE_2];
    // }
  }

  // isEnabled(name: string): boolean {
  //   return this.data && this.data[name] !== undefined;
  // }

  // getValue(name: string): number | undefined {
  //   return this.data ? this.data[name] : undefined;
  // }

  // get fetched(): boolean {
  //   return Object.keys(this.data).length > 0;
  // }
}

const initialState: featureConfigState = {
  featureConfigs: new FeatureConfigs(),
  inProgress: false,
  succeeded: false,
  failed: false,
};

export const featureConfigSlice = createSlice({
  name: "featureConfig",
  initialState,
  reducers: {
    fetchFeatureConfigs: state => {
      state.inProgress = true;
      state.succeeded = false;
      state.failed = false;
    },
    fetchFeatureConfigsSucceeded: (state, action: PayloadAction<{ config: FeatureConfigData }>) => {
      state.featureConfigs = new FeatureConfigs(action.payload.config);
      state.inProgress = false;
      state.succeeded = true;
      state.failed = false;
    },
    fetchFeatureConfigsFailed: state => {
      state.inProgress = false;
      state.succeeded = false;
      state.failed = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { fetchFeatureConfigs, fetchFeatureConfigsSucceeded, fetchFeatureConfigsFailed } =
  featureConfigSlice.actions;
export const featureConfigSelector = (state: RootState) => state.featureConfig;

export default featureConfigSlice.reducer;
