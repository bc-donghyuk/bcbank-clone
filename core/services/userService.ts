import { USER_PROFILE_API_ENDPOINT } from "../constants/apiURIs";
import http from "./httpService";

function getProfile() {
  return http.get(USER_PROFILE_API_ENDPOINT);
}

export default {
  getProfile,
};
