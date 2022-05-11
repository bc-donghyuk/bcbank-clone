import { FeatureConfig } from "models/IFeatureConfig";
import userService from "./userService";

const fetchFeatureConfig = async () => {
  try {
    const response = await userService.getFeatureConfigs();

    return new FeatureConfig(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { fetchFeatureConfig };
