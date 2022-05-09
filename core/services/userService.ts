import http from "services/httpService";
import { FEATURE_CONFIGS_API_ENDPOINT, USER_PROFILE_API_ENDPOINT } from "constants/apiURIs";

function getProfile() {
  return http.get(USER_PROFILE_API_ENDPOINT);
}

function fetchFeatureConfigs() {
  return http.get(FEATURE_CONFIGS_API_ENDPOINT);
}

export default {
  getProfile,
  fetchFeatureConfigs,
};
