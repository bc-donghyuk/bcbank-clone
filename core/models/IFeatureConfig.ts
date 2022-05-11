export type IFeatureConfig = Record<string, number> | {};

export class FeatureConfig {
  readonly data: IFeatureConfig;

  constructor(featureConfigs?: IFeatureConfig) {
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
