import httpService from "./httpService";
import webAuthService from "./webAuthService";

const configure = () => {
  httpService.configure();
  webAuthService.configure();
};

export default {
  configure,
};
